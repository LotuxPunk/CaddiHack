import React, { useState, useEffect } from 'react'
import withNavbar from '../hoc/withNavbar';
import Item from '../Components/Item';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add'
import Select from 'react-select';
import Done from '@material-ui/icons/Done'
import { cyan } from '@material-ui/core/colors';
import { fade } from '@material-ui/core/styles/colorManipulator';
import axios from 'axios';


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
    },
    infoParagraphe: {
        textAlign: "center",
        fontSize: 18,
        backgroundColor: fade(cyan[300], 0.5),
    },
    pricing : {
        position: "absolute",
        bottom: 65,
        fontSize: 18,
    } 
  });


function ShoppingList(){

    const [totalPrice, setTotalPrice] = useState(0);
    const [shopItems, setShopItems] = useState([]);
    const [items, setItems] = useState([]);
    const [displayDropDown, setDisplayDropDown] = useState(false);
    const [info, setInfo] = useState("");

    useEffect(()=>{
        axios.get("https://cyberrubberducks-webapps.azurewebsites.net/api/Item/" + localStorage.getItem("shop"))
        .then(res => {
            setShopItems(res.data);
        });
    }, []);

    function showItemSelection(){
        setDisplayDropDown(!displayDropDown);
        setInfo("");
    }

    const addItem = (e) => {
        setItems([...items, {...e, "count" : 1}])
        setTotalPrice(totalPrice + e.price);
        setDisplayDropDown(!displayDropDown);
    }

    const removeArticle = (article) => {
        const item = items.find(item => (item.label === article));
        setTotalPrice(totalPrice - item.price * item.count)
        setItems(items.filter(item => (item.label !== article)));
    }

    function saveList(){
        const jsonItem = items.map(item => { return {'item' : item.item, 'quantity' : item.count} })
        const jsonShoppingList = {
            'shopId' : localStorage.getItem("shop"),
            'listName' : 'Ma toute premiere liste',
            'items' : jsonItem
        }
        console.log("My shopping list", JSON.stringify(jsonShoppingList));
        /*
        axios.post("https://cyberrubberducks-webapps.azurewebsites.net/api/ShoppingList")
        .then(res => {
            console.log(res.data)
            setShopItems(res.data);
        });
        */
        localStorage.setItem('article', JSON.stringify(items));
        console.log(JSON.parse(localStorage.getItem("article")));
        setItems([]);
        setDisplayDropDown(false);
        setInfo("Votre liste à bien été ajouté !");
    }

    function countChangeHandler(article, n){
        const itemIndex = items.indexOf(article);
        items[itemIndex].count += n;
        setTotalPrice(totalPrice + items[itemIndex].price * n)
    }

    function getItemsValue(){
        return shopItems.filter(shopItem => {
            return !items.some(item => item.label === shopItem.label);
        })
    }

    const classes = useStyles();
    const articles = items.map((item, index) => (<Item key={index} item={item} removeArticle={removeArticle} countChange={countChangeHandler}/>))
    const infoParagraphe = info ? <p className={classes.infoParagraphe}>{info}</p> : null;
    const options = getItemsValue();
    return(
        <div className='ShoppingList w-100'>
            <h2 className={classes.title}>Ma liste de course</h2>
            {articles}
            {
                displayDropDown ? (<Select className={classes.selectItem}
                    onChange={addItem} 
                    options={options}
                    placeholder="Choissez votre article !"
                />) : null
            }
            {infoParagraphe}
            <Button size="small" className={classes.btnAddItem} onClick={showItemSelection}>{<Add fontSize="large"/>}Ajouter un produit</Button>
            <p className={classes.pricing}>Prix Total : {totalPrice.toFixed(2)} €</p>
            <Button size="small" className={classes.btnCheck} onClick={saveList}>{<Done fontSize="large"/>}</Button>
        </div>
    );
}

const WrappedComponent = withNavbar(ShoppingList);

export default WrappedComponent;