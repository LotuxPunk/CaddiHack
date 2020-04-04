import React, { useState } from 'react'
import withNavbar from '../hoc/withNavbar';
import Item from '../Components/Item';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add'
import Select from 'react-select';
import Done from '@material-ui/icons/Done'
import { cyan } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      display: "flex",
      minWidth: 275,
      marginTop: 30,
    },
    title: {
        textAlign: "center",
        marginTop: 10,
    },
    btnAddItem: {
        float: "right",
        marginTop: 15,
    },
    selectItem: {
        marginTop: 20,
    },
    btnCheck: {
        backgroundColor: cyan[800],
        position: "absolute",
        bottom: 65,
        right: 20,
    }
  });


function ShoppingList(){

    const [items, setItems] = useState([]);
    const [displayDropDown, setDisplayDropDown] = useState(false);

    function showItemSelection(){
        setDisplayDropDown(!displayDropDown);
    }

    const addItem = (e) => {
        setItems([...items, {"name" : e.value, "count" : 0}])
        setDisplayDropDown(!displayDropDown);
    }

    const removeArticle = (article) => {
        setItems(items.filter(item => (item.name !== article)));
    }

    function saveList(){
        localStorage.setItem('article', JSON.stringify(items));
    }

    function countChangeHandler(article, n){
        //Oui, je sais j'ai pas réfléchit et je vous ****** !
        const item = items.find(item => item.name === article);
        const newItem = {"name" : item.name, "count" : item.count + n};
        const oldItems = items.filter(item => item.name !== article);
        setItems([...oldItems, newItem])
    }

    const classes = useStyles();
    const articles = items.map((item) => (<Item item={item} removeArticle={removeArticle} countChange={countChangeHandler}/>))
    return(
        <div className='ShoppingList w-100'>
            <h2 className={classes.title}>Ma liste de course</h2>
            {articles}
            {
                displayDropDown ? (<Select className={classes.selectItem}
                    onChange={addItem} 
                    options={[{value : "Pomme", label : "Pomme"}, {value : "Peche", label : "Peche"}, {value : "Poire", label : "Poire"}, {value : "Thé", label : "Thé"}]}
                    placeholder="Choissez votre article !"
                />) : null
            }
            <Button size="small" className={classes.btnAddItem} onClick={showItemSelection}>{<Add fontSize="large"/>}Ajouter un produit</Button>
            <Button size="small" className={classes.btnCheck} onClick={saveList}>{<Done fontSize="large"/>}</Button>
        </div>
    );
}

const WrappedComponent = withNavbar(ShoppingList);

export default WrappedComponent;