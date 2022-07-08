import React from 'react'


const categories = ['Smartphones', 'Smart TV', 'Computers']

const CategoryFilter = ({setSearchProductFilter, products}) => {


    const categoryFilter = categoryFilter => {
        setSearchProductFilter(products.filter(e => e.category?.name.toLowerCase().includes(categoryFilter.toLowerCase()) === true))
      }


  return (
    <div>
        <h2>Category</h2>
        <ul className='ulcategory'>
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