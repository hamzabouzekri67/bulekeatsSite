'use client';
import { useState } from 'react';

export default function RegisterRestaurant() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    restaurantName: '',
    restaurantType: '', // قوائم خيارات
    country: '',        // يكتب كتابة
    state: '',          // يكتب كتابة
    cityDistrict: '',   // يكتب كتابة
  });

  const [status, setStatus] = useState({ loading: false, message: '', error: false });

  // قائمة خيارات أنواع المطاعم/الشركات
  const restaurantTypes = [
    'مطعم مأكولات سريعة (Fast Food)',
    'مطعم تقليدي (Traditional)',
    'مقهى (Café)',
    'مطعم مشويات (Grill)',
    'مخبز وحلويات (Bakery)',
    'أخرى (Other)'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', error: false });

    try {
      const response = await fetch('/api/restaurants/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: 'تم تسجيل المطعم بنجاح!', error: false });
        // تفريغ النموذج بعد النجاح
        setFormData({ firstName: '', lastName: '', restaurantName: '', restaurantType: '', country: '', state: '', cityDistrict: '' });
      } else {
        setStatus({ loading: false, message: result.message || 'حدث خطأ ما', error: true });
      }
    } catch (error) {
      setStatus({ loading: false, message: 'تعذر الاتصال بالسيرفر', error: true });
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', direction: 'rtl', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>تسجيل مطعم جديد</h2>
      
      <form onSubmit={handleSubmit}>
        {/* الاسم واللقب */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label>الاسم الأورل:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>اللقب:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>

        {/* اسم الشركة / المطعم */}
        <div style={{ marginBottom: '15px' }}>
          <label>اسم المطعم (الشركة):</label>
          <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        {/* نوع الشركة (اختيارات) */}
        <div style={{ marginBottom: '15px' }}>
          <label>نوع الشركة/المطعم:</label>
          <select name="restaurantType" value={formData.restaurantType} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">اختر نوع المطعم...</option>
            {restaurantTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* الدولة (كتابة) */}
        <div style={{ marginBottom: '15px' }}>
          <label>الدولة:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="اكتب اسم الدولة هنا" required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        {/* الولاية (كتابة) */}
        <div style={{ marginBottom: '15px' }}>
          <label>الولایة / المحافظة:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="اكتب اسم الولاية هنا" required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        {/* الحي (كتابة) */}
        <div style={{ marginBottom: '20px' }}>
          <label>الحي / الشارع:</label>
          <input type="text" name="cityDistrict" value={formData.cityDistrict} onChange={handleChange} placeholder="اكتب اسم الحي هنا" required style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>

        {/* زر الإرسال */}
        <button type="submit" disabled={status.loading} style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
          {status.loading ? 'جاري التسجيل...' : 'تسجيل المطعم'}
        </button>
      </form>

      {/* رسائل الحالة */}
      {status.message && (
        <div style={{ marginTop: '15px', padding: '10px', borderRadius: '5px', textAlign: 'center', backgroundColor: status.error ? '#ffeedd' : '#e6f4ea', color: status.error ? '#d93025' : '#137333' }}>
          {status.message}
        </div>
      )}
    </div>
  );
}