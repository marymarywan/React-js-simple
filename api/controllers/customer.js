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
    const q = "INSERT INTO customer(`id`, `name`, `address`, `post`, `phone`, `fax`, `email`) VALUES (?)";

    const value = [
        req.body.id,
        req.body.name,
        req.body.address,
        req.body.post,
        req.body.phone,
        req.body.fax,
        req.body.email
    ]

    db.query(q, [value], (err, row)=>{
        if(err) return res.send(err)

        return res.send(`The data id ${req.params.id} has been added`)

    })
}