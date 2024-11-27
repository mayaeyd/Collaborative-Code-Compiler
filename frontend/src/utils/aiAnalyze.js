import axios from "axios";

export const aiAnalyze = async (output) => {
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/analyze-code',{
            error:output
        });
        return response.data.choices[0].message.content;
        
    }catch(error){
        console.error(error);
    }
};
