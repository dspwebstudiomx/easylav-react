import { useState } from 'react';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage('Error al enviar el archivo');
    }
  };

  return (
    <div>
      <h1>Subir Archivo</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Enviar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default FileUploader;