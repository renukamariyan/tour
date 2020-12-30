import axios from 'axios';

const CUSTOMER_API_BASE_URL="http://localhost:8080/staff";
class CustomerService {
   
    getCustomerById(userId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + userId);
    }
    validateStaff(customerLogin){
        return axios.post(CUSTOMER_API_BASE_URL + '/login', customerLogin);
    }

    }


export default new CustomerService()