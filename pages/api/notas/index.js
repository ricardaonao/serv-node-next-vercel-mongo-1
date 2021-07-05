import dbConnect from "../../../utils/dbConnect";
import Dados from "../../../models/cep";

dbConnect()





// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {

                const Result = await Dados.find({});
                res.status(200).json({ sucess: true, data: Result })
                
            } catch (error) {
                
                res.status(400).json({ sucess: false })
                
            }
            
            break;
        case 'POST':
            try {
                
                const Result = await Dados.create(req.body);
                res.status(201).json({ sucess: true, data: Result })

            } catch (error) {

                res.status(400).json({ sucess: false })
                
            }
            break;
    
        default:
            break;
    }
}