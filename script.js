import { products } from './data.js';

const templateSource = document.getElementById('products-template').innerHTML;

const template = Handlebars.compile(templateSource);

const html = template({ products });

document.getElementById('container').innerHTML = html;
