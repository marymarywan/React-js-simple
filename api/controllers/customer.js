import {db} from "../db.js"

export const getPost = (req, res) => {
    const q = "SELECT * FROM `customer` ORDER BY `post` ASC"
    db.query(q, (err, data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data)
    })

}

export const getId = (req, res) => {
   const q = "SELECT * FROM customer WHERE id = ?"
   db.query(q, [req.params.id], (err, data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data)
   })
}

export const deletePost = (req, res) => {
    const q = "DELETE FROM `customer` WHERE id = ?"
    db.query(q, [req.params.id], (err, data)=> {
        if(err) return res.send(err)

        return res.send(`The data id ${req.params.id} has been deleted`)
    })
}

export const post = (req, res) => {
    const q = "INSERT INTO customer SET ?";

    const params = req.body
    db.query(q, params, (err, row)=>{
        if(err) return res.send(err)

        return res.send(`The data id ${req.params.id} has been added`)

    })
}