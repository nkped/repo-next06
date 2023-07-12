import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
return (
    <section>
        <Image 
            src='/images/20230514_171044 (1).jpg' 
            width={200} 
            height={200} 
            alt='Nils-Kristian Pedersen' 
            priority={true} />
    </section>
  )
}
