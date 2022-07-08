import React, { useRef } from 'react'


const categories = ['Smartphones', 'Smart TV', 'Computers']

const CategoryFilter = ({setSearchProductFilter, products}) => {




    const categoryFilter = categoryFilter => {
        setSearchProductFilter(products.filter(e => e.category?.name.toLowerCase().includes(categoryFilter.toLowerCase()) === true))
      }


  return (
    <div className='container__category'>
        <h2>Category</h2>
        <button  className="home__btn-filtro"><i className="fa-solid fa-filter"></i></button>
        <ul className='category__list'>
            {
                categories.map(category => (
                    <li onClick={() => categoryFilter(category)} key={category}>{category}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default CategoryFilter