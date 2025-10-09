'use client'

import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import RoofingIcon from '@mui/icons-material/Roofing'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'


type Props = {
    checkoutFormTitle : string
    submitButton : string 
    fullname : string
    emailText : string
    phoneText : string  
    landText: string
    cityText : string
    zipText : string
    locationText : string
    houseNumber : string
}

const CheckOutForm = ({ checkoutFormTitle, submitButton, fullname, emailText, landText, cityText, zipText, locationText, houseNumber, phoneText } : Props) => {

    const [formData, setFormData] = useState({
        fullName : '',
        email : '',
        phone: '',
        land:  '',
        city: '',
        zip: '',
        address: '',
        adressNum: '',
    })

    const [loading, setLoading] = useState(false)
    const cartItems = useCartStore((state) => state.items)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const res = await fetch('/api/create-checkout-session', {
            method:  'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify({
                customerData : formData,
                cartItems,
            })
        })

        const data = await res.json()
        if(data.url) {
            window.location.href = data.url
        }
        setLoading(false)
    }


  return (
    <div className='flex justify-center items-center mt-10 w-full p-4'>
        <form 
            className='flex flex-col justify-center items-center gap-4 w-full max-w-xl'
            onSubmit={handleSubmit}
        >
            <h1 className='text-2xl font-semibold mb-4 text-center'>{checkoutFormTitle}</h1>
            <div className='flex gap-2 items-center w-full'>
                <PersonIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={fullname} className='input-field' name='fullName'/>
            </div>

            <div className='flex gap-2 items-center w-full'>
                <AlternateEmailIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={emailText} className='input-field' name='email' />
            </div>

            <div className='flex gap-2 items-center w-full'>
                <PhoneAndroidIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={phoneText} className='input-field' name='phone'/>
            </div>

            <div className='flex gap-2 items-center w-full'>
                <PublicOutlinedIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={landText} className='input-field' name='land'/>
            </div>

            <div className='flex gap-2 items-center w-full'>
                <LocationCityOutlinedIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={cityText} className='input-field' name='city'/>
            </div>


            <div className='flex gap-2 items-center w-full'>
                <AppRegistrationOutlinedIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={zipText} className='input-field' name='zip'/>
            </div>

            <div className='flex gap-2 items-center w-full'>
                <LocationOnIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={locationText} className='input-field' name='address'/>
            </div>

            <div className='flex gap-2 items-center w-full'>
                <RoofingIcon sx={{ color : 'black' }} fontSize='medium'/>
                <input placeholder={houseNumber} className='input-field' name='addressNum'/>
            </div>

            <button
                type='submit'
                disabled={loading}
                className='bg-black text-white w-full py-2 rounded-lg font-semibold'
            >{submitButton}
            </button>
        </form>
    </div>
  )
}

export default CheckOutForm