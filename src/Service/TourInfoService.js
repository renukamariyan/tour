import axios from 'axios';

const TOURINFO_API_BASE_URL = "http://localhost:8080/tourinfo";

class TourInfoService {

    getTourInfo(){
        return axios.get(TOURINFO_API_BASE_URL+'/all');
    }
    getIssueById(issueId){
        return axios.get(TOURINFO_API_BASE_URL + '/' + issueId);
    }

    updateIssue(issue){
        return axios.put(TOURINFO_API_BASE_URL + '/updateissue' ,issue);
    }
    
    confirmTour(tourinfo){
        return axios.post(TOURINFO_API_BASE_URL + '/confirm' ,tourinfo);
    }
    
}

export default new TourInfoService();