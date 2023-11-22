import { useFormAction } from "react-router-dom";

import Input from "../helpers/Input.jsx";

const FormContact = () => {
    const {
        register, 
        formState: {errors},
        } = useFormAction();

    return (
        <form className="row">
            <div className="col-12 col-md-6">
            <Input
            label='Name'
            name='firstname'
            className='mb-2'
            register={register}
            error={!!errors?.firstname}
            options={{
                required: true,
            minLength: {
                value: 2,
                message: 'This field has a minimum of 2 characters.',
              },
            maxLength: {
                value: 20,
                message: 'This field has a maximum of 20 characters.',
              },
        }}
        required/>
        <p className='text-danger'>{errors.firstname?.message}</p>
        </div>
            <div className="col-12 col-md-6">
            <Input
            label='Email'
            type='email'
            name='email'
            className='mb-2'
            register={register}
            error={!!errors?.email}
            options={{
                required: true,
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'You must enter a valid email.',
                },
            minLength: {
                value: 3,
                message: 'This field has a minimum of 3 characters.',
              },
            maxLength: {
                value: 20,
                message: 'This field has a maximum of 20 characters.',
              },
        }}
        required/>
        <p className='text-danger'>{errors.email?.message}</p>
            </div>
            <div className="col-12 col-md-6">
            <Input
            label='Phone'
            type='tel'
            name='phone'
            register={register}
            error={!!errors?.phone}
            options={{
                required: true,
                pattern: {
                    value: /^(?:\+\d{1,3})?(?:[ -]?\d{1,}){8,}$/,
                    message: 'Please enter a valid cell phone number.',
                },
        }}
        required/>
        <p className='text-danger'>{errors.phone?.message}</p>
            </div>
            <div className="col-12 col-md-6">
            <Input
            label='Message'
            type='text'
            name='message'
            register={register}
            error={!!errors?.message}
            options={{
                required: true,
            minLength: {
                value: 3,
                message: 'This field has a minimum of 3 characters.',
              },
            maxLength: {
                value: 60,
                message: 'This field has a maximum of 60 characters.',
              },
            }}
            required/>
            <p className='text-danger'>{errors.message?.message}</p>
            </div>
            <div className="text-end">
            <button className="btn-sign-up mt-3" type="submit">Submit</button>
            </div>
        </form>
    );
};
export default FormContact;