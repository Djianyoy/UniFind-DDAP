import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
        <Image
         src={"/lingkaran-besar.webp"}
         alt='Lingkaran Utama'
         width={500}
         height={500}
         className='absolute top-[-100px] right-[-80px] w-[600px] opacity-60'
        />

        <Image
         src={"/lingkaran-kecil-1.webp"}
         alt='Lingkaran Utama'
         width={500}
         height={500}
         className='absolute bottom-0 left-0 w-[500px] opacity-70'
        />

        <Image
         src={"/lingkaran-kecil-2.webp"}
         alt='Lingkaran Utama'
         width={500}
         height={500}
         className='absolute -bottom-40 left-80 w-[500px]'
        />
    </div>
  )
}

export default Background