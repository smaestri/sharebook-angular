import React from 'react'
import axios from 'axios'
import { useHistory, Link } from "react-router-dom";

import './AddBook.scss'

function AddBook(props) {
    const history = useHistory();
    const [bookData, setBookData] = React.useState({name: '', categoryId: 0})
    const [categories, setCategories] = React.useState({})

    const fetchBook = (idBook) => {
        axios.get(`/books/${idBook}`).then(response => {
            if (response && response.data) {
                setBookData({ name: response.data.name, categoryId: response.data.category.id })
            }
        })
    }

    const fetchCategories = () => {
        axios.get('/categories/').then(response => {
            if (response && response.data) {
                setCategories(response.data)
                // Exercice : try to not put line below
                setBookData({ name: '', categoryId: response.data[0].id})
            }
        }).then(()=> {
            if (props.params && props.params.bookId) {
                // edit book
                fetchBook(props.params.bookId);
            }
        })
    }

    React.useEffect(() => {
        fetchCategories();
    }, []);

    const handleInputChange = (e) => {
        let obj = { ...bookData }
        obj[e.target.name] = e.target.value
        setBookData(obj)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (props.params && props.params.bookId) {
            //use PUT, not POST
            axios.put(`/books`, {
                ...bookData, id: props.params.bookId,
            }).then(response => {
                history.push("/myBooks");
            }).catch(error => {
                alert('Erreur détectée : ' + error.response.data)
            })
        } else {
            axios.post(`/books`, {
                ...bookData,
            }).then(() => {
                history.push("/myBooks");
            }).catch(error => {
                alert('Erreur détectée : ' + error.response.data.errors[0].defaultMessage)
            })
        }
    }

    return (
        <div className="container-add-book">
            <h1>Ajouter un livre</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Nom du livre</label>
                    <input name="name" type="text" className="form-control" value={bookData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>catégorie du livre</label>
                    {categories.length > 0  ? (<select name="categoryId" className="form-control" value={bookData.categoryId} onChange={handleInputChange}>
                        {categories.map(category => (
                            <option value={category.id} key={category.id} >{category.label}</option>
                        ))}
                    </select>):null}
                </div>

                <div className="container-submit">
                    <input type="submit" value="Valider" className="btn btn-primary" />
                </div>
            </form>
            <div><Link to="/myBooks">Retour</Link></div>
        </div>
    )
}

export default AddBook;