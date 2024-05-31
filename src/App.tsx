import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

function genRandomChunkId(min: number = 0, max: number = 100): string {
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomNumber = '';

  for (let i = 0; i < length; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }

  return randomNumber;
}

function App() {
  const [chunkId, setChunkId] = useState(() =>
    genRandomChunkId()
      .split('')
      .map((item, i) => ({
        val: item,
        key: String(i),
      })),
  );
  const handleSortChunkId = () => {
    setChunkId((preChunkId) => {
      return [...preChunkId.sort((a, b) => Number(a.val) - Number(b.val))];
    });
  };
  return (
    <div className="p-2">
      <div className="flex">
        {chunkId.map((item) => (
          <motion.div
            key={item.key}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            layoutId={item.key}
          >
            {item.val}
          </motion.div>
        ))}
      </div>
      <Button onClick={handleSortChunkId}>排序</Button>
    </div>
  );
}

export default App;
