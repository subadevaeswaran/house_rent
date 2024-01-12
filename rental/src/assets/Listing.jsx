import React from 'react'
import Cards from './Cards'

function Listing() {
  return (
    <div>
        <div className='grid lg:grid-cols-3 gap-10 p-10'>
                  <Cards src={"https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$15,000"} address={"333, Mubark Valley"} parking={"4"} bath={"4"} room={"5"} />
                  <Cards src={"https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$11,000"} address={"332,George Street"} parking={"1"} bath={"3"} room={"2"} />
                  <Cards src={"https://images.unsplash.com/photo-1600573474589-2016ac90b542?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"456, Hikory street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$11,000"} address={"33,Tokyo Street"} parking={"1"} bath={"3"} room={"2"} />
                  <Cards src={"https://images.unsplash.com/photo-1605276376845-9c9cfd19140f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$22,000"} address={"154, Washington Street"} parking={"2"} bath={"3"} room={"4"} />
                  <Cards src={"https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$19,000"} address={"198, Mariana Kisley Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                  <Cards src={"https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} price={"$12,000"} address={"123,weblying george Street"} parking={"3"} bath={"2"} room={"3"} />
                </div>
    </div>
  )
}

export default Listing