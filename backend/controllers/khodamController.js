// Installation and configuration
const CryptoJS = require('crypto-js');
const mongoose = require('mongoose')

// Import model
const Khodam = require('../models/khodamModel')

const getKhodams = async (req,res)=>{
    const khodams = await Khodam.find({}).sort({createdAt: -1})

    res.status(200).json(khodams)
}

const getKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('Khodam Not Found')
    }

    const khodam = await Khodam.findById(id)

    if(!khodam){
        return res.status(404).json({error: "Khodam Not Found"})
    }
    
    res.status(200).json(khodam)
}

const getRandomKhodam = async (req,res) => {
    const random = await Khodam.aggregate([{$sample: {size:1}}])
    res.status(200).json(random)
}

//HASHING

const hashToNumber = (input) => {
    const hash = CryptoJS.SHA256(input).toString();
    const hashNumber = parseInt(hash, 16);
    return hashNumber;
  };

  const getHashKhodam = async (req, res) => {
    try {
      const { nama } = req.query; // Mengambil nama dari query parameter
  
      if (!nama) {
        return res.status(400).json({ message: 'Nama tidak boleh kosong' });
      }
  
      const today = new Date();
      const day = today.getDate();
  
      // Menghasilkan hash number
      const hashNumber = hashToNumber(nama);
  
      // Mengalikan dengan tanggal hari ini
      const multipliedNumber = hashNumber * day;
  
      // Mendapatkan jumlah total dokumen dalam koleksi Khodam
      const totalCount = await Khodam.countDocuments();
  
      // Jika tidak ada data, kembalikan respons yang sesuai
      if (totalCount === 0) {
        return res.status(404).json({ message: 'No Khodam found' });
      }
  
      // Melakukan operasi modulo dengan jumlah data
      const finalIndex = multipliedNumber % totalCount;
  
      // Mengambil Khodam berdasarkan indeks final
      const khodam = await Khodam.findOne().skip(finalIndex);
  
      // Jika tidak ada hasil, kembalikan respons yang sesuai
      if (!khodam) {
        return res.status(404).json({ message: 'Khodam not found' });
      }
  
      res.status(200).json(khodam);
    } catch (err) {
      console.error("Error fetching Khodam:", err);
      res.status(500).json({ error: err.message });
    }
  };

const postKhodam = async (req,res)=>{
    const {name} = req.body
    
    try{
        const khodam = await Khodam.create({name})
        res.status(200).json(khodam)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    const khodam = await Khodam.findOneAndDelete({_id:id})

    if(!khodam){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    res.status(200).json(khodam)
}

const patchKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    const khodam = await Khodam.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!khodam){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    res.status(200).json(khodam)
}

//wrap all methods, then export em
module.exports = {
    getKhodams,
    getKhodam,
    getRandomKhodam,
    getHashKhodam,
    postKhodam,
    deleteKhodam,
    patchKhodam
}