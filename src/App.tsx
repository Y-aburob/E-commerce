import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Nav from './components/Nav';

export default function App() {

  const [click, setClick] = useState(false)

  return (
    < >
        <Home />
    </>
  )
}