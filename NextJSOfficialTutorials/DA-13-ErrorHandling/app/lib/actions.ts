'use server';

import { custom, z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending','paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({id:true,date:true});

export async function createInvoice(formData: FormData)
{

    const { customerId, amount, status } = CreateInvoice.parse(
        {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
        }
    );

    // const rawFormData = {
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    // };

    //caveman debug the data
    // console.log(`inside createInvoice form data`);
    // console.log(rawFormData);

    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try 
    {
        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    }
    catch (error)
    {
        return {
            message: `Database Error: Failed to create an invoice`,
        }
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true});
export async function updateInvoice(id: string, formData: FormData) {
    const {
        customerId, amount, status
    } = UpdateInvoice.parse(
        {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),            
        }
    );

    const amountInCents = amount * 100;

    try {
        await sql`
        UPDATE invoices
        SET customer_id =  ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    }
    catch (error)
    {
        return {
            message: `Database Error: Failed to update invoice`,
        }
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');    
}


export async function deleteInvoice(id: string) {

    //uncomment this to test your error page.
    // throw new Error('Failed to Delete Invoice');

    try 
    {
        await sql`
        DELETE FROM invoices WHERE id = ${id}
        `;
        revalidatePath('/dashboard/invoices');
        return { message: 'Deleted invoice'}
    }
    catch (error) {
        return { message: 'Database Error: Failed to delete Invoice.' };
      }    


}