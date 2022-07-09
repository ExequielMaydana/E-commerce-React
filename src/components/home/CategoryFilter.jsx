import React, { useRef } from 'react'


const categories = ['Smartphones', 'Smart TV', 'Computers']

const CategoryFilter = ({setSearchProductFilter, products}) => {

    const categoryMenu = useRef()

    // const toCloseMenu = useRef()

    const openFilter = () => {
        categoryMenu?.current.classList.add('open-category')
    }

    const toCloseFilter = () => {
        categoryMenu?.current.classList.remove('open-category')
    }

    const categoryFilter = categoryFilter => {
        setSearchProductFilter(products.filter(e => e.category?.name.toLowerCase().includes(categoryFilter.toLowerCase()) === true))
      }


  return (
    <div className='container__category'>
        <div className='container__btn-text'>
        <button onClick={openFilter}  className="home__btn-filtro"><i className="fa-solid fa-filter"></i></button>
        <p className='category__filter-text'>filtrar</p>
        </div>
        <div ref={categoryMenu} className='category__menu'>
        <h2>Categorias</h2>
        <ul className='category__list'>
            {
                categories.map(category => (
                    <li className='category__list-item' onClick={() => categoryFilter(category)} key={category}>{category}</li>
                ))
            }
        </ul>
        <div onClick={toCloseFilter} className='menu__x'><i className="fa-solid fa-xmark"></i></div>
        </div>
    </div>
  )
}

export default CategoryFilter