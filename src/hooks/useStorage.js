import { async } from '@firebase/util';
import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFairStorage,
  timestamp,
} from '../fairbase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFairStorage.collection('image');

    storageRef.put(file).on('sate_changed', (snap) => {
      let percentage = (snap.bytesTransfer / snap.totalBytes) * 100;
      setProgress(percentage);
    }),
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
      };
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
