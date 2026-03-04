function isPalindrome(x: number): boolean {
    
    if (x < 0) return false;

    if (x > 0 && x < 10) return true;

    let n = Math.abs(x);
    let rev = 0;

    while (n != 0) {
        // Extrae el último dígito del número usando módulo 10
        let digit = n % 10;
        // Añade el dígito extraído al número invertido (desplaza rev una posición y suma el nuevo dígito)
        rev = rev * 10 + digit;
        // Elimina el último dígito del número original usando división entera
        n = ~~(n / 10);
    }

    if (rev < ( 2 ** 31) * -1 || rev > (2 ** 31) - 1) return false;
    
    return rev === x ? true : false;
}

console.log(isPalindrome(121));
