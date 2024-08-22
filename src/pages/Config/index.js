import React, { useState, useCallback, useEffect } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider'; 
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import './styles.js'; 

const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function ImageUploadScreen() {
  const firestore = getFirestore();
  const storage = getStorage(firebaseApp);

  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [user, setUser] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const pickImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const uploadImage = async () => {
    try {
      if (selectedImage && user && croppedAreaPixels) {
        const canvas = document.createElement('canvas');
        const image = new Image();
        image.src = selectedImage;
        await new Promise((resolve) => {
          image.onload = resolve;
        });

        const ctx = canvas.getContext('2d');
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        canvas.toBlob(async (blob) => {
          const storageRef = ref(storage, `wallpapers/${Date.now()}`);
          await uploadBytes(storageRef, blob);

          const wallpaper = await getDownloadURL(storageRef);
          const userDoc = doc(firestore, 'users', user.uid);
          await updateDoc(userDoc, { wallpaper: wallpaper });

          setSelectedImage(null);
        });
      }
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <input type="file" accept="image/*" onChange={pickImage} />

      {selectedImage && (
        <div style={{ position: 'relative', width: '100%', height: 400 }}>
          <Cropper
            image={selectedImage}
            crop={crop}
            zoom={zoom}
            aspect={9 / 16}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e, zoom) => setZoom(zoom)}
              aria-labelledby="Zoom"
              style={{ width: 200 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <MdZoomOut />
              <MdZoomIn />
            </div>
          </div>
        </div>
      )}

      <button onClick={uploadImage}>Enviar para Firestore</button>
    </div>
  );
}
