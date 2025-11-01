import mongoose from 'mongoose';
import 'dotenv/config';
import { Product } from './Models/Product.js';

let products = [
  {
    "name": "Ember Glow Mug",
    "price": 18.99
  },
  {
    "name": "Aura Noise-Cancelling Headphones",
    "price": 149.99
  },
  {
    "name": "Zenith Portable Charger",
    "price": 25.50
  },
  {
    "name": "Nova Stylus Pen",
    "price": 12.00
  },
  {
    "name": "Chrono Smart Watch",
    "price": 89.95
  }
]

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');

    console.log('Deleting existing product data...');
    await Product.deleteMany({});

    console.log('Inserting new seed data...');
    await Product.insertMany(products);
    
    console.log('------------------------------');
    console.log('Database seeded successfully!');
    console.log('------------------------------');

  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  } finally {
    console.log('Closing database connection...');
    await mongoose.connection.close();
    console.log('Connection closed.');
  }
};

// --- 3. Run the Seeding Function ---
seedDatabase();