
const names = [
  'Mohamed Al-Misrati', 'Ahmed Al-Werfalli', 'Emily Johnson', 'Ava Thompson', 'Aisha Al-Fitouri',
  'Youssef Al-Mahdi', 'Mariam Al-Tarhouni', 'Olivia Williams', 'Salma Al-Obeidi', 'Ali Al-Zawi',
  'Nour Al-Din Al-Mansouri', 'Isabella Martinez', 'Mustafa Al-Sharif', 'Amal Al-Benghazi', 'Katherine Rodriguez',
  'Charlotte Wilson', 'Abdullah Al-Senussi', 'Rania Al-Hassi', 'Hassan Al-Jerbi', 'Samira Al-Tumi',
  'Mahmoud Al-Faqih', 'Dina Al-Qaddafi', 'Tariq Al-Huni', 'Asma Al-Badri', 'Sami Al-Kikly',
  'Khadija Al-Zintani', 'Fathi Al-Majbri', 'Mona Al-Atrash', 'Abdulrahman Al-Muntasir', 'Layla Al-Shibani',
  'Anas Al-Kabir', 'Rim Al-Fitouri', 'Abigail Taylor', 'Nadia Al-Masri', 'Salah Al-Din Al-Warfali',
  'Huda Al-Bakoush', 'Walid Al-Tarhouni', 'Yasmin Al-Barasi', 'Fawzi Al-Mahjoub', 'Sabrine Al-Zawi',
  'Abdulaziz Al-Obeidi', 'Najwa Al-Mansouri', 'Ismail Al-Benghazi', 'Ruqayya Al-Mabrouk', 'Hamza Al-Misrati',
  'Mabrouka Al-Senussi', 'Mustafa Al-Jerbi', 'Muntaser Al-Faqih', 'Fadwa Al-Hassi', 'Salem Al-Sharif',
];


// Ten fixed, scattered positions are not qualified; the other 40 are.
const notQualified = new Set([3, 8, 14, 19, 25, 31, 36, 40, 44, 48])

export const participants = names.map((name, i) => ({
  id: String(i + 1),
  name,
  qualified: !notQualified.has(i),
}))

export const getParticipant = (id) => participants.find((p) => p.id === id)
