import { mount } from '@vue/test-utils'
import ReportForm from '@/views/ReportForm.vue'
import { expect, test } from 'vitest';

test('renders form', async () => {
  const form = mount(ReportForm)
  const date = form.get('.report-form__date')

  const kebabCase = 'fr-CA'
  expect(date.element.value).toBe((new Date).toLocaleDateString(kebabCase))
})