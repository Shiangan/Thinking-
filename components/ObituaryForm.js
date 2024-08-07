import { useState } from 'react';

export default function ObituaryForm() {
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    deathDate: '',
    age: '',
    content: '',
    photos: [],
    memorialPlaquePlacement: '',
    funeralDate: '',
    funeralLocation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/obituary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    alert('訃聞已提交');
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, photos: files.map(file => URL.createObjectURL(file)) });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <label htmlFor="name">姓名</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <label htmlFor="birthDate">出生日期</label>
      <input
        id="birthDate"
        type="date"
        value={form.birthDate}
        onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
        required
      />
      <label htmlFor="deathDate">死亡日期</label>
      <input
        id="deathDate"
        type="date"
        value={form.deathDate}
        onChange={(e) => setForm({ ...form, deathDate: e.target.value })}
        required
      />
      <label htmlFor="age">年齡</label>
      <input
        id="age"
        type="number"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        required
      />
      <label htmlFor="content">訃聞內容</label>
      <textarea
        id="content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
      />
      <label htmlFor="photos">照片（可多選）</label>
      <input
        id="photos"
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoUpload}
      />
      {form.photos.length > 0 && (
        <div className="photo-preview">
          {form.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index}`} className="w-full h-auto rounded"/>
          ))}
        </div>
      )}
      <label htmlFor="memorialPlaquePlacement">紀念牌位置</label>
      <input
        id="memorialPlaquePlacement"
        type="text"
        value={form.memorialPlaquePlacement}
        onChange={(e) => setForm({ ...form, memorialPlaquePlacement: e.target.value })}
        required
      />
      <label htmlFor="funeralDate">葬禮日期</label>
      <input
        id="funeralDate"
        type="date"
        value={form.funeralDate}
        onChange={(e) => setForm({ ...form, funeralDate: e.target.value })}
        required
      />
      <label htmlFor="funeralLocation">葬禮地點</label>
      <input
        id="funeralLocation"
        type="text"
        value={form.funeralLocation}
        onChange={(e) => setForm({ ...form, funeralLocation: e.target.value })}
        required
      />
      <button type="submit" className="btn btn-primary">提交</button>
    </form>
  );
}
