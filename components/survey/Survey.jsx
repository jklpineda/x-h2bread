"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, X, ArrowRight, Check, Loader2 } from 'lucide-react'; // Import Loader2
import '../../public/assets/scss/_survey.scss';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwcubppWqZvrZ3PcggHdwISMMB1efRa4UO_nv8Sipcv82QmqUAku9vSP0hVASbg-vbw/exec';

const questions = [
    {
        id: 'welcome',
        title: 'H2Bread',
        subtitle: 'Tecnología de Hidrógeno Verde para la Panadería Moderna',
        description: `H2Bread lidera la transformación ecológica en la industria panadera. 
      Nuestra tecnología de hidrógeno verde convierte hornos industriales tradicionales 
      en sistemas eco-eficientes de última generación.
    
      Esta encuesta busca entender sus necesidades y mejorar nuestras soluciones sostenibles 
      para su negocio. Su experiencia es clave para el futuro de la panadería sostenible.`,
        benefits: [
            '30% Ahorro energético',
            'Cero emisiones de CO₂',
            'Certificación ambiental'
        ],
        type: 'info'
    },
    {
        id: 'role',
        title: '¿Cuál es su rol principal en la industria panadera?',
        type: 'radio',
        options: [
            'Propietario/Gerente de panadería',
            'Maestro panadero profesional',
            'Consumidor consciente del medio ambiente',
            'Distribuidor/Mayorista de panadería',
            'Proveedor de equipamiento panadero',
        ]
    },
    {
        id: 'production',
        title: '¿Cuál es su volumen diario de producción de pan?',
        type: 'radio',
        options: [
            'Pequeña escala: menos de 500 unidades',
            'Escala media: 500-1000 unidades',
            'Gran escala: 1001-2000 unidades',
            'Producción industrial: más de 2000 unidades',
            'No aplicable a mi rol'
        ],
        condition: (answers) => answers.role === 'Propietario/Gerente de panadería'
    },
    {
        id: 'type',
        title: '¿Qué tipo de horno utiliza actualmente?',
        type: 'radio',
        options: [
            'Horno de carbón tradicional',
            'Sistema de gas industrial',
            'Horno eléctrico moderno'
        ],
        condition: (answers) => answers.role === 'Propietario/Gerente de panadería'
    },
    {
        id: 'importance',
        title: '¿Qué tan relevante es la sostenibilidad ambiental en su negocio?',
        type: 'radio',
        options: [
            'Prioritaria: Es fundamental para nuestro negocio',
            'Significativa: Influye en nuestras decisiones',
            'Moderada: La consideramos ocasionalmente',
            'Limitada: No es una prioridad actual',
            'Mínima: No afecta nuestras operaciones'
        ]
    },
    {
        id: 'knowledge',
        title: '¿Cuál es su nivel de conocimiento sobre la tecnología de hidrógeno verde?',
        type: 'radio',
        options: [
            'Experto: Conozco detalladamente la tecnología',
            'Informado: Comprendo los conceptos básicos',
            'Principiante: Es la primera vez que lo escucho'
        ]
    },
    {
        id: 'interest',
        title: 'Después de conocer H2Bread, ¿cuál es su nivel de interés en implementar esta tecnología?',
        type: 'radio',
        options: [
            'Alto interés: Listo para implementar',
            'Interés significativo: Considerando seriamente',
            'Interés moderado: Necesito más información',
            'Bajo interés: No es prioritario',
            'Sin interés actual'
        ]
    },
    {
        id: 'adoption',
        title: '¿Cuáles son sus principales motivaciones para adoptar H2Bread?',
        type: 'checkbox',
        options: [
            'Ahorro energético significativo comprobado',
            'Fortalecimiento de marca sostenible',
            'Certificación ambiental y cumplimiento normativo',
            'Optimización de calidad del producto final',
            'Ventaja competitiva en el mercado'
        ]
    },
    {
        id: 'barriers',
        title: '¿Cuál es el principal desafío para implementar H2Bread?',
        type: 'radio',
        options: [
            'Inversión inicial requerida',
            'Capacitación técnica necesaria',
            'Adaptación al cambio operativo',
            'Protocolos de seguridad del hidrógeno',
            'Requerimientos de personal especializado'
        ]
    },
    {
        id: 'model',
        title: '¿Cuál es su modelo de adquisición preferido para H2Bread?',
        type: 'radio',
        options: [
            'Compra directa con garantía extendida',
            'Arrendamiento flexible con mantenimiento incluido',
            'Suscripción mensual todo incluido'
        ]
    },
    {
        id: 'services',
        title: '¿Qué servicios complementarios son más valiosos para su operación?',
        type: 'checkbox',
        options: [
            'Programa completo de certificación técnica',
            'Soporte técnico premium 24/7',
            'Sistema de monitoreo y optimización continua',
            'Consultoría especializada en eficiencia',
            'Abastecimiento garantizado de hidrógeno verde'
        ]
    },
    {
        id: 'recommendation',
        title: '¿Qué tan dispuesto estaría a recomendar H2Bread?',
        type: 'radio',
        options: [
            '1 - Definitivamente no recomendaría    ',
            '2 - Probablemente no recomendaría',
            '3 - Podría recomendar',
            '4 - Probablemente recomendaría',
            '5 - Definitivamente recomendaría'
        ]
    },
    {
        id: 'request',
        title: '¿Desea recibir más información sobre nuestra tecnología?',
        type: 'radio',
        options: [
            'Sí, completo',
            'No, de momento'
        ]
    },
    {
        id: 'contact',
        title: 'Complete sus datos de contacto',
        type: 'contact'
    },
    {
        id: 'feedback',
        title: 'Comparta sus sugerencias para mejorar H2Bread',
        type: 'textarea'
    }
];

const Survey = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            const totalQuestions = questions.length;
            return ((currentQuestionIndex + 1) / totalQuestions) * 100;
        };

        setProgress(calculateProgress());
    }, [currentQuestionIndex]);

    useEffect(() => {
        const handleScroll = () => {
            setShowNavigation(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNext = () => {
        const currentQuestion = questions[currentQuestionIndex];

        // Validación antes de avanzar
        if (currentQuestion.type !== 'info') {
            if (!answers[currentQuestion.id] && currentQuestion.type !== 'contact' && currentQuestion.type !== 'textarea') {
                return;
            }
        }

        // Lógica para saltar preguntas basada en el rol
        if (currentQuestion.id === 'role' && answers.role !== 'Propietario/Gerente de panadería') {
            setCurrentQuestionIndex(currentQuestionIndex + 3);
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            if (answers.role !== 'Propietario/Gerente de panadería' &&
                ['production', 'type'].includes(questions[currentQuestionIndex - 1]?.id)) {
                setCurrentQuestionIndex(questions.findIndex(q => q.id === 'role'));
                return;
            }
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleInputChange = (questionId, value, type = 'radio') => {
        setAnswers(prev => {
            if (type === 'checkbox') {
                const currentAnswers = prev[questionId] || [];
                if (currentAnswers.includes(value)) {
                    return {
                        ...prev,
                        [questionId]: currentAnswers.filter(v => v !== value)
                    };
                } else {
                    return {
                        ...prev,
                        [questionId]: [...currentAnswers, value]
                    };
                }
            } else {
                return { ...prev, [questionId]: value };
            }
        });

        // Solo avanzar automáticamente para preguntas de radio que no sean de contacto
        if (type === 'radio' && !questionId.includes('contact')) {
            setTimeout(handleNext, 800);
        }
    };

    const handleContactChange = (field, value) => {
        setAnswers(prev => ({
            ...prev,
            [`contact_${field}`]: value
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('timestamp', new Date().toISOString());

            Object.entries(answers).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    formData.append(key, value.join(', '));
                } else {
                    formData.append(key, value || '');
                }
            });

            // Ensure individual fields are appended correctly
            formData.append('name', answers.contact_name || '');
            formData.append('email', answers.contact_email || '');
            formData.append('phone', answers.contact_phone || '');

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Error en el envío');

            setSubmitted(true);
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar la encuesta. Por favor, intente nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderQuestion = (question) => {
        if (!question) return null;

        const containerVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            exit: { opacity: 0, y: -20 }
        };

        return (
            <motion.div
                key={question.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="question-container"
            >
                {question.type === 'info' ? (
                    <div className="welcome-screen">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="welcome-content"
                        >
                            <h1>{question.title}</h1>
                            <h2>{question.subtitle}</h2>
                            <p>{question.description}</p>

                            <div className="benefits-list">
                                {question.benefits?.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="benefit-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        <Check className="benefit-icon" size={20} />
                                        <span>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                className="start-button"
                                onClick={handleNext}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Comenzar encuesta
                                <ArrowRight size={20} />
                            </motion.button>
                        </motion.div>
                    </div>
                ) : (
                    <div className="question-content">
                        <h2>{question.title}</h2>

                        {(question.type === 'radio' || question.type === 'checkbox') && (
                            <div className="options-grid">
                                {question.options.map((option, index) => (
                                    <motion.button
                                        key={option}
                                        onClick={() => handleInputChange(question.id, option, question.type)}
                                        className={`option-button ${
                                            question.type === 'checkbox'
                                                ? (answers[question.id] || []).includes(option) ? 'selected' : ''
                                                : answers[question.id] === option ? 'selected' : ''
                                        }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02, translateX: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="option-text">{option}</span>
                                        <motion.div
                                            className="check-mark"
                                            initial={{ scale: 0 }}
                                            animate={{
                                                scale: question.type === 'checkbox'
                                                    ? (answers[question.id] || []).includes(option) ? 1 : 0
                                                    : answers[question.id] === option ? 1 : 0
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Check size={20} />
                                        </motion.div>
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {question.type === 'contact' && (
                            <motion.div
                                className="contact-form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        onChange={(e) => handleInputChange(`${question.id}_name`, e.target.value)}
                                        className="contact-input"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e) => handleInputChange(`${question.id}_email`, e.target.value)}
                                        className="contact-input"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Teléfono"
                                        onChange={(e) => handleInputChange(`${question.id}_phone`, e.target.value)}
                                        className="contact-input"
                                    />
                                </div>
                                <motion.button
                                    onClick={handleNext}
                                    className="continue-button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Continuar
                                    <ArrowRight size={20} />
                                </motion.button>
                            </motion.div>
                        )}

                        {question.type === 'textarea' && (
                            <motion.div
                                className="textarea-wrapper"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                <textarea
                    placeholder="Escribe tu respuesta aquí..."
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className="feedback-textarea"
                    rows={6}
                />
                                <motion.button
                                    onClick={handleSubmit}
                                    className="submit-button"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <div className="loading">
                                            <Loader2 className="animate-spin" size={20} />
                                            <span>Enviando...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span>Enviar encuesta</span>
                                            <ArrowRight size={20} />
                                        </>
                                    )}
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                )}
            </motion.div>
        );
    };

    if (submitted) {
        return (
            <motion.div
                className="success-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.div
                    className="success-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="success-icon"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.4
                        }}
                    >
                        <Check size={48} />
                    </motion.div>
                    <h2>¡Gracias por completar la encuesta!</h2>
                    <p>Tus respuestas son muy valiosas para nosotros.</p>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <div className="typeform-container">
            {/* Fondo animado */}
            <div className="background-gradient" />

            {/* Texto en la esquina superior */}
            <div className="powered-by">
                Powered by H2Bread
            </div>

            {/* Barra de progreso */}
            <div className="progress-container">
                <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Controles de navegación */}
            <motion.div
                className="navigation-controls"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <motion.button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="nav-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronUp size={20} />
                </motion.button>
                <motion.button
                    onClick={handleNext}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="nav-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronDown size={20} />
                </motion.button>
                <motion.button
                    onClick={() => window.location.href = '/'}
                    className="close-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X size={20} />
                </motion.button>
            </motion.div>

            {/* Contenedor principal */}
            <div className="questions-wrapper">
                <AnimatePresence mode="wait">
                    {renderQuestion(questions[currentQuestionIndex])}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Survey;
