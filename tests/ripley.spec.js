// @ts-check
const { test, expect } = require('@playwright/test');

test('agregar al carro de compras', async ({ page }) => {
  //await context.tracing.start({snapshots:true,screenshots:true})
//test.slow();
 //test.setTimeout(120000);
 page.pause();
  await page.goto('https://simple.ripley.com.pe/');
  await page.getByRole('button', { name: 'No, gracias' }).click();
  await page.getByPlaceholder('Buscar productos').click();
  await page.getByPlaceholder('Buscar productos').fill('adidas');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.locator("a[id='2026315736036'] div[class='catalog-product-details__name']").click()
  await page.getByText('7.1', { exact: true }).click();
  await page.getByRole('button', { name: 'Agregar al carro' }).click();
  await page.getByText('Selecciona tu departamento').click();
  await page.getByLabel('Lima').click();
  await page.getByText('Selecciona tu provincia').click();
  await page.getByLabel('Lima').click();
  await page.getByText('Selecciona tu distrito').click();
  await page.getByLabel('San Juan de Miraflores').click();
  await page.getByRole('button', { name: 'Agregar al carro' }).click();
  await page.getByRole('button', { name: 'Ir al carro' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByPlaceholder('Ingresa tu DNI').fill('54689876');
  await page.getByPlaceholder('Ingresa tu DNI').press('Tab');
  await page.getByPlaceholder('Ingresa tu contraseña').fill('4675443435');
  //await context.tracing.stop({path:'test1trace.zip'});
  //await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  //await page.getByText('El usuario ingresado no existe').dblclick();
  
});

test.only('grabar el precio del producto', async ({ page }) => {
  //await context.tracing.start({snapshots:true,screenshots:true})
//test.slow();
 //test.setTimeout(120000);
 page.pause();
  await page.goto('https://simple.ripley.com.pe/');
  await page.getByRole('button', { name: 'No, gracias' }).click();
  await page.getByPlaceholder('Buscar productos').click();
  await page.getByPlaceholder('Buscar productos').fill('macbook pro');
  await page.getByRole('button', { name: 'Buscar' }).click();
  var precioMayor=0;
  var precioMenor=1000000;
  var resultado;
  const precios = await page.locator("li[title='Precio Ripley']").allTextContents();
  const titulos = await page.locator("div[class='catalog-product-details__name']").allTextContents();
  for(var i=0; i<precios.length ;i++){
    resultado = precios[i].slice(2,9)
    resultado= resultado.replace(',','')
    for(var j=0;j<titulos.length;j++){
      if(precioMayor<Number(resultado)){
        precioMayor = Number(resultado);
        console.log(precioMayor +" "+titulos[i])
      }
      if(precioMenor>Number(resultado)){
        precioMenor=Number(resultado)
        console.log(precioMenor +" "+titulos[i])
      }
    }
  }
});