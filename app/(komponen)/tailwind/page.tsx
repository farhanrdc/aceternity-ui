import React from 'react'

const TailwindPage = () => {
  return (
    <div className="container grid grid-cols-3 gap-x-4 gap-y-8">
        <div className='divide-y-8 divide-blue-100'>
            <div className="bg-blue-500 size-24"></div>
            <div className="bg-blue-500 size-24"></div>
            <div className="bg-blue-500 size-24"></div>
        </div>

        <div className="col-span-2 h-48 w-full bg-gradient-to-r from-indigo-500 to-emerald-500 via-blue-700 from-20%"></div>

        <div className="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta beatae nostrum nihil animi. Perspiciatis exercitationem neque, consectetur unde nesciunt tenetur? Adipisci odio illo cupiditate soluta deserunt sed? Quis dolore quaerat perferendis consequatur ratione fugit fugiat enim voluptatibus blanditiis, mollitia minus aliquam optio nisi vitae iure magnam deleniti voluptatum asperiores neque minima reprehenderit. Reiciendis, quo molestiae sequi eveniet quia aliquam sed suscipit omnis iure officiis nisi perspiciatis illo harum praesentium quam voluptas unde perferendis, explicabo facilis mollitia vero ut minus. Veritatis aliquid culpa possimus ut dolore veniam, vitae quam! Facere tempora aliquam architecto animi excepturi eum voluptates consequatur. Sunt, veritatis.
        </div>

        <div className="flex justify-between">
            <button className="h-12 w-24 bg-blue-700 text-white ring-4 rounded-lg ring-violet-500">
                Click me
            </button>
            <button className="h-12 w-24 bg-blue-700 text-white ring-4 rounded-lg focus:ring-violet-500">
                Click me
            </button>
        </div>

        <div>
            <h2>Check dokumentasi <a target='_blank' className='text-blue-400' href="https://tailwindcss.com/docs/animation">tailwind animation</a> </h2>
            
        </div>

        <div>
            <h3>Nyalain Screen Reader untuk melihat konten berikut</h3>
            <div className="sr-only bg-violet-600 size-40"></div>
        </div>

        <article className="prose lg:prose-xl">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
            </p>
            <p>
                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                springing up around the country.
            </p>
            
        </article>
    </div>
  )
}

export default TailwindPage