import { Badge } from "@/components/ui/badge"

const img1 = "https://cdn.poehali.dev/projects/3c93ba03-04a2-451d-9055-00b49babcf32/files/d032733d-560b-4e12-9273-f0f5ee490a06.jpg"
const img2 = "https://cdn.poehali.dev/projects/3c93ba03-04a2-451d-9055-00b49babcf32/files/aba6618a-6c14-4363-ab41-fadd23f57252.jpg"
const img3 = "https://cdn.poehali.dev/projects/3c93ba03-04a2-451d-9055-00b49babcf32/files/2a0e3d0f-ebc6-461f-b3e0-7b69b2f8b194.jpg"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#3B82F6] border-[#3B82F6]">Язык №1 в мире</Badge>,
    title: "Python.",
    content: "Простой. Мощный. Везде.",
    showButton: true,
    buttonText: 'Начать изучение',
    image: img1,
    imageAlt: 'Python — язык программирования',
    accent: '#3B82F6',
  },
  {
    id: 'what',
    title: 'Что такое Python?',
    content: 'Python — высокоуровневый язык программирования с чистым синтаксисом. Создан в 1991 году Гвидо ван Россумом.',
    accent: '#3B82F6',
  },
  {
    id: 'simple',
    title: 'Читается как английский.',
    content: 'Минимум символов, максимум смысла. Код на Python понятен даже без опыта программирования.',
    image: img3,
    imageAlt: 'Синтаксис Python',
    accent: '#FBBF24',
  },
  {
    id: 'data',
    title: 'Data Science и ИИ.',
    content: 'NumPy, Pandas, TensorFlow, PyTorch — экосистема Python доминирует в машинном обучении и анализе данных.',
    image: img2,
    imageAlt: 'Data Science с Python',
    accent: '#3B82F6',
  },
  {
    id: 'web',
    title: 'Веб-разработка.',
    content: 'Django и FastAPI позволяют создавать мощные backend-сервисы и API за считанные часы.',
    accent: '#FBBF24',
  },
  {
    id: 'automation',
    title: 'Автоматизация.',
    content: 'Скрипты для обработки файлов, парсинга сайтов, работы с API — Python автоматизирует рутину.',
    accent: '#3B82F6',
  },
  {
    id: 'community',
    title: 'Огромное сообщество.',
    content: 'Более 8 миллионов библиотек на PyPI. Решение для любой задачи уже существует.',
    image: img2,
    imageAlt: 'Сообщество Python',
    accent: '#FBBF24',
  },
  {
    id: 'career',
    title: 'Карьера и доход.',
    content: 'Python-разработчики входят в топ самых востребованных специалистов. Средняя зарплата — от 150 000 ₽.',
    accent: '#3B82F6',
  },
  {
    id: 'start',
    title: 'Начать легко.',
    content: 'Первую программу на Python можно написать за 5 минут. Установка, print("Hello, World!") — и вы уже программист.',
    image: img3,
    imageAlt: 'Начало работы с Python',
    accent: '#FBBF24',
  },
  {
    id: 'cta',
    title: 'Твой код начинается здесь.',
    content: 'Python ждёт. Начни сегодня — уже через неделю ты напишешь свою первую программу.',
    showButton: true,
    buttonText: 'Начать бесплатно',
    accent: '#3B82F6',
  },
]
