const locale = navigator.language; 

export const currencyFormatter = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'BRL'
});

export const dateFormatter = new Intl.DateTimeFormat(locale);