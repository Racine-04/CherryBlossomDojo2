import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import Footer from './Footer';
import CherryBlossomBot from './Chatbot';
import 'react-calendar/dist/Calendar.css';
import './booking.css';
import cherryBlossomMotifLeft from './img/cherryBlossomMotif.png';
import cherryBlossomMotifRight from './img/cherryBlossomMotif2.png';

const Booking = () => {
  const { t } = useTranslation();

  const senseis = [
    {
      id: 1,
      name: 'Sensei John',
      expertise: 'Karate',
      availability: generateAvailability('2024-07-10', 90, ['10:00', '14:00', '16:00']),
    },
    {
      id: 2,
      name: 'Sensei Jane',
      expertise: 'Muay Thai',
      availability: generateAvailability('2024-07-10', 90, ['11:00', '15:00', '17:00']),
    },
    {
      id: 3,
      name: 'Sensei Liu',
      expertise: 'Taekwondo',
      availability: generateAvailability('2024-07-10', 90, ['09:00', '13:00', '18:00']),
    },
    {
      id: 4,
      name: 'Sensei Maria',
      expertise: 'Brazilian Jiu Jitsu',
      availability: generateAvailability('2024-07-10', 90, ['08:00', '12:00', '17:00']),
    },
    {
      id: 5,
      name: 'Sensei Akira',
      expertise: 'Karate',
      availability: generateAvailability('2024-07-10', 90, ['10:00', '14:00', '19:00']),
    },
    {
      id: 6,
      name: 'Sensei Tom',
      expertise: 'Boxing',
      availability: generateAvailability('2024-07-10', 90, ['09:30', '13:30', '17:30']),
    },
    {
      id: 7,
      name: 'Sensei Emi',
      expertise: 'Brazilian Jiu Jitsu',
      availability: generateAvailability('2024-07-10', 90, ['10:30', '15:00', '18:30']),
    },
    {
      id: 8,
      name: 'Sensei Ivan',
      expertise: 'Muay Thai',
      availability: generateAvailability('2024-07-10', 90, ['08:30', '12:30', '16:30']),
    },
  ];

  const [selectedSensei, setSelectedSensei] = useState(senseis[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  function generateAvailability(startDate, daysAhead, times) {
    const availability = [];
    const start = new Date(startDate);

    for (let i = 0; i < daysAhead; i++) {
      const current = new Date(start);
      current.setDate(current.getDate() + i);

      // Randomize time slots for each day
      times.sort(() => Math.random() - 0.5);
      times.forEach((time) => {
        const [hours, minutes] = time.split(':');
        current.setHours(hours, minutes);
        availability.push(current.toISOString());
      });
    }

    return availability;
  }

  const handleSenseiChange = (e) => {
    const sensei = senseis.find(s => s.id === parseInt(e.target.value));
    setSelectedSensei(sensei);
    setSelectedDate(null);
    setSelectedTime('');
    setErrors({});
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
    setErrors({});
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setErrors({});
  };

  const handleInputChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBooking = () => {
    const newErrors = {};
    if (!selectedSensei) newErrors.sensei = t('selectSensei');
    if (!selectedDate) newErrors.date = t('selectDate');
    if (!selectedTime) newErrors.time = t('selectTime');
    if (!bookingDetails.name) newErrors.name = t('nameRequired');
    if (!bookingDetails.email) {
      newErrors.email = t('emailRequired');
    } else if (!validateEmail(bookingDetails.email)) {
      newErrors.email = t('invalidEmailFormat');
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const confirmed = window.confirm(t('confirmBooking', {
        sensei: selectedSensei.name,
        date: selectedDate.toLocaleDateString(),
        time: selectedTime
      }));
      if (confirmed) {
        window.alert(t('bookingConfirmed', {
          sensei: selectedSensei.name,
          date: selectedDate.toLocaleDateString(),
          time: selectedTime
        }));
        window.location.href = '/'; // Redirect to home page
      }
    }
  };

  const handleCancel = () => {
    window.location.href = '/';
  };

  const getAvailableTimes = () => {
    if (!selectedDate) return [];
    return selectedSensei.availability
      .filter(dateTime => new Date(dateTime).toDateString() === selectedDate.toDateString())
      .map(dateTime => new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  return (
    <div className="entry-booking">
      <Navbar name={"Book"} />
      <div className="contain">
        <img src={cherryBlossomMotifLeft} className="cherry-blossom-left-custom" alt="Cherry Blossom Motif" />
        <img src={cherryBlossomMotifRight} className="cherry-blossom-right-custom" alt="Cherry Blossom Motif" />
        <div className="booking-container-custom">
          <div className="form-container-custom">
            <h2>{t('bookSession')}</h2>
            <div className="form-group-custom">
              <label>{t('selectSensei')}:</label>
              <select onChange={handleSenseiChange}>
                {senseis.map(sensei => (
                  <option className="book-options" key={sensei.id} value={sensei.id}>{sensei.name} - {sensei.expertise}</option>
                ))}
              </select>
              {errors.sensei && <p className="error-message">{errors.sensei}</p>}
            </div>
            <div className="form-group-custom">
              <label>{t('selectDate')}:</label>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileDisabled={({ date }) => !selectedSensei.availability.some(dateTime => new Date(dateTime).toDateString() === date.toDateString())}
                tileClassName={({ date }) =>
                  selectedSensei.availability.some(dateTime => new Date(dateTime).toDateString() === date.toDateString())
                    ? 'react-calendar__tile--available'
                    : null
                }
              />
              {errors.date && <p className="error-message">{errors.date}</p>}
            </div>
            <div className="form-group-custom">
              <label>{t('selectTime')}:</label>
              <select value={selectedTime} onChange={handleTimeChange} disabled={!selectedDate}>
                <option className="book-options" value="">{t('selectTime')}</option>
                {getAvailableTimes().map(time => (
                  <option className="book-options" key={time} value={time}>{time}</option>
                ))}
              </select>
              {errors.time && <p className="error-message">{errors.time}</p>}
            </div>
            <div className="form-group-custom">
              <label>{t('name')}:</label>
              <input
                type="text"
                name="name"
                placeholder={t('namePlaceholder')}
                value={bookingDetails.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group-custom">
              <label>{t('email')}:</label>
              <input
                type="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                value={bookingDetails.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="button-group">
              <button className="button-cancel" onClick={handleCancel}>{t('cancel')}</button>
              <button className="button-custom" onClick={handleBooking}>{t('bookNow')}</button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default Booking;