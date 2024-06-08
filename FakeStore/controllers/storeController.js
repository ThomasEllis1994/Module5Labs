import axios from "axios";

const productList = (req, res) => {
    axios
        .get("https://fakestoreapi.com/products")
        .then((response) => res.json(response.data));
};
export default productList;
