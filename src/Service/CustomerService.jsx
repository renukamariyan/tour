import axios from 'axios';

const CUSTOMER_API_BASE_URL="http://localhost:8080/customer";
class CustomerService {
    getCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL+'/findall');
    }
    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/insertcustomer',customer);
    }
    getCustomerById(userId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + userId);
    }
    validateUser(customerLogin){
        return axios.post(CUSTOMER_API_BASE_URL + '/login', customerLogin);
    }

    }


export default new CustomerService()