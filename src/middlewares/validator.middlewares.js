const {body, validationResult} =  require('express-validator')
const validField = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            status:'error',
            errors: errors.mapped()
        })

    }   next()
}


exports.updateUserValidation = [
    body('name').notEmpty().withMessage('Name is requered'),
    body('description').notEmpty().withMessage('Description is requred')
    .isLength({min:10,max:100}).withMessage("long minima de 10 caracteres"),
    validField

]