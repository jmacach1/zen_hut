import axios from 'axios';
import data from './productData';

class ProductService {
  serverUrl = 'http://fsdi.azurewebsites.net/api';

  getData() {
    return data;
  }

  async getCatalog() {
    const res = await axios.get(this.serverUrl + "/products");
    return res.data;
  }
}

 
export default ProductService;