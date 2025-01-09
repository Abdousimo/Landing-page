import React from 'react'
import { useTranslation } from 'react-i18next'
import Question from './Question'

const FAQS = () => {
    const { t } = useTranslation()
  return (
    <section className='bg-pink py-20'>
       <h1 className='text-primary text-3xl font-bold text-center'>{t('FAQ.title')}</h1>
       <div className='container space-y-4 mt-20'>
          <Question question={t('FAQ.questions.one.question')} answer={t('FAQ.questions.one.answer')}/>
          <Question question={t('FAQ.questions.two.question')} answer={t('FAQ.questions.two.answer')}/>
          <Question question={t('FAQ.questions.three.question')} answer={t('FAQ.questions.three.answer')}/>
          <Question question={t('FAQ.questions.four.question')} answer={t('FAQ.questions.four.answer')}/>
       </div>
    </section>
  )
}

export default FAQS