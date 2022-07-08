import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = ({setSearchProduct}) => {

    const{handleSubmit, register, reset} = useForm()

    const submit = data => {
      setSearchProduct(data.searchText)
    }
  return (
   <form onSubmit={handleSubmit(submit)} className='form__home'>
    <div className='form__home-item'>
    <input className='form__home-input' type='text' {...register('searchText')}/>
    <label className='form__home-label' htmlFor=''>search product by name</label>
    </div>
    <button className='form__home-btn'>Search</button>
   </form>
  )
}

export default InputSearch