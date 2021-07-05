import dbConnect from "../../../utils/dbConnect";
import Dados from "../../../models/cep";

dbConnect()


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { 
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const Result = await Dados.findById(id);

                if (!Dados) {
                    return res.status(400).json({ sucess: false });
                }

                res.status(200).json({ sucess: true, data: Result})
            } catch (error) {

                res.status(400).json({ sucess: false });            
            }  

            break;
        case 'PUT':
            try {
                const Result = await Dados.findByIdAndUpdate(id, req.body, {
                    new:true,
                    runValidators: true
                });

                if (!Dados) {
                    return res.status(400).json({ sucess: false });
                }
                res.status(200).json({ sucess: true, data: Result})
                
            } catch (error) {

                res.status(400).json({ sucess: false });
                
            }
            break;
        case 'DELETE':
            try {
                
                const deleteDados = await Dados.deleteOne({ _id: id });

                if(!deleteDados) {
                    return res.status(400).json({ sucess: false });
                }

                res.status(200).json({ sucess: true, data: {}});

            } catch (error) {
                res.status(400).json({ sucess: false });
                
            }
            break;
    
        default:

            res.status(400).json({ sucess: false });

            break;
    }

}