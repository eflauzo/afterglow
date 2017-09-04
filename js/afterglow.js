/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */


/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */


/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */


/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */


/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */


/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */


/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */


/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */


/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/


/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */


/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */



/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */


/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */


/**
 * Alias for {@link mat2.multiply}
 * @function
 */


/**
 * Alias for {@link mat2.subtract}
 * @function
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */


/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */


/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */


/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */


/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */


/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */


/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */


/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */


/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/


/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/


/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */


/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */


/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */


/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */


/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Alias for {@link mat2d.multiply}
 * @function
 */


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create$2() {
  let out = new ARRAY_TYPE(9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */


/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */


/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */


/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */


/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */


/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */


/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/


/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */


/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */


/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/


/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/


/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/


/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */


/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */




/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */


/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */


/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Alias for {@link mat3.multiply}
 * @function
 */


/**
 * Alias for {@link mat3.subtract}
 * @function
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create$3() {
  let out = new ARRAY_TYPE(16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */


/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy$3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */


/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */



/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity$3(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose$2(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert$3(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */


/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate$2(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale$3(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate$3(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < EPSILON) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */


/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */


/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */


/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */


/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */


/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */


/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */


/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */


/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */


/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */


/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */


/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */


/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */


/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Alias for {@link mat4.multiply}
 * @function
 */


/**
 * Alias for {@link mat4.subtract}
 * @function
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create$5() {
  let out = new ARRAY_TYPE(3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */


/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$1(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues$5(x, y, z) {
  let out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */


/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */


/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */


/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */


/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */


/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */


/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */


/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */


/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */


/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */


/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */


/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize$1(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$1(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */


/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */


/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */


/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */


/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */


/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */


/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */


/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */


/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */


/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */


/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */


/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Alias for {@link vec3.subtract}
 * @function
 */


/**
 * Alias for {@link vec3.multiply}
 * @function
 */


/**
 * Alias for {@link vec3.divide}
 * @function
 */


/**
 * Alias for {@link vec3.distance}
 * @function
 */


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len$1 = length$1;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create$5();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create$6() {
  let out = new ARRAY_TYPE(4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */


/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */


/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */


/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */


/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */


/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */


/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */


/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale$6(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */


/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */


/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */


/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */


/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */


/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */


/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize$2(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */


/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */


/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */


/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */


/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */


/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Alias for {@link vec4.subtract}
 * @function
 */


/**
 * Alias for {@link vec4.multiply}
 * @function
 */


/**
 * Alias for {@link vec4.divide}
 * @function
 */


/**
 * Alias for {@link vec4.distance}
 * @function
 */


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */


/**
 * Alias for {@link vec4.length}
 * @function
 */


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach$1 = (function() {
  let vec = create$6();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create$4() {
  let out = new ARRAY_TYPE(4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */


/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */


/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */


/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */


/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */


/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */


/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */


/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */


/**
 * Alias for {@link quat.multiply}
 * @function
 */


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */


/**
 * Alias for {@link quat.length}
 * @function
 */


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize$$1 = normalize$2;

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = create$5();
  let xUnitVec3 = fromValues$5(1,0,0);
  let yUnitVec3 = fromValues$5(0,1,0);

  return function(out, a, b) {
    let dot$$1 = dot$1(a, b);
    if (dot$$1 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len$1(tmpvec3) < 0.000001)
        cross(tmpvec3, yUnitVec3, a);
      normalize$1(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot$$1 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot$$1;
      return normalize$$1(out, out);
    }
  };
})();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create$4();
  let temp2 = create$4();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = create$2();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize$$1(out, fromMat3(out, matr));
  };
})();

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create$7() {
  let out = new ARRAY_TYPE(2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */


/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */


/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */


/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */


/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */


/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */


/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */


/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */


/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */


/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */


/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */


/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */


/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */


/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */


/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */


/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */


/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */


/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */


/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


/**
 * Alias for {@link vec2.length}
 * @function
 */


/**
 * Alias for {@link vec2.subtract}
 * @function
 */


/**
 * Alias for {@link vec2.multiply}
 * @function
 */


/**
 * Alias for {@link vec2.divide}
 * @function
 */


/**
 * Alias for {@link vec2.distance}
 * @function
 */


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach$2 = (function() {
  let vec = create$7();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER

class CxRenderingProgramManager {
    constructor() {
        this.programs = new Map();
    }
    get_program(context, program) {
        if (!this.programs.has(program)) {
            let new_program = new program();
            new_program.init(context);
            this.programs.set(program, new_program);
        }
        return this.programs.get(program);
    }
}

// Enum identifies rendering mode
var CxRenderingMode;
(function (CxRenderingMode) {
    CxRenderingMode[CxRenderingMode["CxSelection"] = 1] = "CxSelection";
    CxRenderingMode[CxRenderingMode["CxVisualize"] = 2] = "CxVisualize";
})(CxRenderingMode || (CxRenderingMode = {}));
class CxRenderingContext {
    constructor(gl, canvas_width, canvas_height) {
        this.mvMatrix = create$3();
        this.pMatrix = create$3();
        this.normalMatrix = create$3();
        //this.normalMatrix = null
        this.current_relative_viewport = [0.0, 0.0, 1.0, 1.0];
        this.gl = gl;
        //this.rendering_program = null;
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        this.rendering_program_manager = new CxRenderingProgramManager();
        this.scene = null;
    }
    reset(canvas_width, canvas_height) {
        identity$3(this.mvMatrix);
        identity$3(this.pMatrix);
        this.mode = CxRenderingMode.CxVisualize;
        this.name = 0;
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        //this.style.contour_size = 1.0/this.canvas_width
        //this.style.glow_size = (1.0/this.canvas_width) * 3.0
        this.updateNormalMatrix();
        // We want to ignore previous scrissor and clear all screen.
        this.gl.disable(this.gl.SCISSOR_TEST);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // but we want scissor test enabled for rest of the rendeting process
        // to have scoped view operations.
        this.gl.enable(this.gl.SCISSOR_TEST);
    }
    updateNormalMatrix() {
        //this.normalMatrix =
        invert$3(this.normalMatrix, this.mvMatrix);
        //this.normalMatrix = this.normalMatrix.transpose();
        transpose$2(this.normalMatrix, this.normalMatrix);
    }
}

class CxDisplay {
    constructor(canvas_id) {
        this.render = () => {
            var displayWidth = this.canvas.clientWidth;
            var displayHeight = this.canvas.clientHeight;
            // Check if the canvas is not the same size.
            if (this.canvas.width != displayWidth ||
                this.canvas.height != displayHeight) {
                // Make the canvas the same size
                this.canvas.width = displayWidth;
                this.canvas.height = displayHeight;
            }
            this.context.reset(this.canvas.width, this.canvas.height);
            this.context.scene = this.scene;
            this.scene.root.render(this.context);
            window.setTimeout(this.render, 100);
        };
        this.canvas = document.getElementById(canvas_id);
        var gl = this.canvas.getContext("webgl", {
            preserveDrawingBuffer: true,
            antialias: false
        });
        this.context = new CxRenderingContext(gl, this.canvas.width, this.canvas.height);
        this.context.gl.enable(this.context.gl.BLEND);
        this.context.gl.blendFunc(this.context.gl.SRC_ALPHA, this.context.gl.ONE_MINUS_SRC_ALPHA);
    }
    start(scene) {
        this.scene = scene;
        this.render();
    }
}

//TODO: node should be interface
/**
 * Node acts as hub. It has payload array items that need to be redered
 * and it maintains list of children
 * @class CxNode
 */
class CxNode {
    constructor(payload) {
        this.payload = payload;
        this.items = [];
    }
    render(context) {
        //iterate over payload nodes and execute 'enter' method
        for (let item of this.payload) {
            item.enter(context);
        }
        // perform rendering on all subnodes
        for (let item of this.items) {
            item.render(context);
        }
        //iterate over payload nodes and execute 'exit' method
        for (let item of this.payload) {
            item.exit(context);
        }
    }
    enter(context) {
        this.render(context);
    }
    exit(context) {
    }
}

class CxRenderingProgram {
    constructor() {
        this.initialized = false;
    }
    init(context) {
        this.fragment_shader = context.gl.createShader(context.gl.FRAGMENT_SHADER);
        context.gl.shaderSource(this.fragment_shader, this.getFragmentShaderSource());
        context.gl.compileShader(this.fragment_shader);
        if (!context.gl.getShaderParameter(this.fragment_shader, context.gl.COMPILE_STATUS)) {
            throw new Error("Can not compile fragment shader");
        }
        this.vertex_shader = context.gl.createShader(context.gl.VERTEX_SHADER);
        context.gl.shaderSource(this.vertex_shader, this.getVertexShaderSource());
        context.gl.compileShader(this.vertex_shader);
        if (!context.gl.getShaderParameter(this.vertex_shader, context.gl.COMPILE_STATUS)) {
            throw new Error("Can not compile vertex shader");
        }
        this.shaderProgram = context.gl.createProgram();
        context.gl.attachShader(this.shaderProgram, this.vertex_shader);
        context.gl.attachShader(this.shaderProgram, this.fragment_shader);
        context.gl.linkProgram(this.shaderProgram);
        if (!context.gl.getProgramParameter(this.shaderProgram, context.gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }
        this.configure(context);
    }
    activate(context) {
        if (!this.initialized) {
            this.init(context);
            this.initialized = true;
        }
        context.gl.useProgram(this.shaderProgram);
    }
}

class CxRenderingProgramColorArray extends CxRenderingProgram {
    configure(context) {
        context.gl.useProgram(this.shaderProgram);
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexColorAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexColor");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
    }
    /*
    visualize(context: CxRenderingContext, obj: CxGeometry): void {
        context.gl.useProgram(this.shaderProgram)

        context.gl.uniformMatrix4fv(this.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(this.mvMatrixUniform, false, context.mvMatrix);

        var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, vertex_buf[0]);
        context.gl.vertexAttribPointer(this.vertexPositionAttribute,
            3, // 3 values per axis
            context.gl.FLOAT,
            false,
            0,
            0);

        var color_buf: [WebGLBuffer, number] = obj.getColorBuffer(context)
        context.gl.enableVertexAttribArray(this.vertexColorAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, color_buf[0]);
        context.gl.vertexAttribPointer(this.vertexColorAttribute,
            4, // 4 values per color
            context.gl.FLOAT,
            false,
            0,
            0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, vertex_buf[1]);
    }
    */
    getFragmentShaderSource() {
        return `precision mediump float;

                varying vec4 vColor;

                void main(void) {
                      gl_FragColor = vColor;
                    }
                `;
    }
    getVertexShaderSource() {
        return `attribute vec3 aVertexPosition;
                attribute vec4 aVertexColor;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  varying vec4 vColor;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      vColor = aVertexColor;
                  }
                `;
    }
}

class CxRenderingProgramSelection extends CxRenderingProgram {
    configure(context) {
        context.gl.useProgram(this.shaderProgram);
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "vColor");
    }
    getFragmentShaderSource() {
        return `precision mediump float;

                uniform vec4 vColor;

                void main(void) {
                      gl_FragColor = vColor;
                    }
                `;
    }
    getVertexShaderSource() {
        return `attribute vec3 aVertexPosition;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      //vColor = aVertexColor;
                  }
                `;
    }
}

class CxNameManager {
    constructor() {
        // todo: shall it be just a vector?
        this._objects = new Map();
        this.name_counter = 0;
    }
    genName(object) {
        this.name_counter += 1;
        //console.log("name return", this.name_counter)
        this._objects.set(this.name_counter, object);
        return this.name_counter;
    }
    getObject(name) {
        //todo use .has and fail nicely
        return this._objects.get(name);
    }
    static toColor(name_value) {
        let value = name_value * 20;
        let red = value >> 16 & 0xFF;
        let green = value >> 8 & 0xFF;
        let blue = value & 0xFF;
        return [red / 255.0, green / 255.0, blue / 255.0, 1.0];
    }
    static fromColor(color) {
        let result = 0x000000;
        result = result | Math.round(color[0] * 255.0) << 16;
        result = result | Math.round(color[1] * 255.0) << 8;
        result = result | Math.round(color[2] * 255.0);
        return Math.ceil(result / 20);
    }
}

//export class CxNodePayloadVisualizer implements CxNodePayload {
class CxVisualizer {
    constructor(rendering_program, obj) {
        this.selection_vertex_buf = null;
        this.obj = obj;
        this.rendering_program = rendering_program;
    }
    enter(context) {
        if (context.mode == CxRenderingMode.CxSelection) {
            let prog = context.rendering_program_manager.get_program(context, this.rendering_program);
            prog.activate(context);
            context.gl.disable(context.gl.DITHER);
            context.gl.disable(context.gl.BLEND);
            this.obj.preorder(context);
            // two sided rendering
            context.gl.disable(context.gl.CULL_FACE);
            //context.gl.cullFace(context.gl.FRONT);
            //context.rendering_program.visualize(context, this.obj)
            //this.visualize(context, prog);
            //context.gl.cullFace(context.gl.BACK);
            //context.rendering_program.visualize(context, this.obj)
            this.visualize_selection(context);
        }
        else {
            context.gl.enable(context.gl.BLEND);
            context.gl.enable(context.gl.DITHER);
            let prog = context.rendering_program_manager.get_program(context, this.rendering_program);
            prog.activate(context);
            this.obj.preorder(context);
            // two sided rendering
            context.gl.enable(context.gl.CULL_FACE);
            context.gl.cullFace(context.gl.FRONT);
            //context.rendering_program.visualize(context, this.obj)
            this.visualize(context, prog);
            context.gl.cullFace(context.gl.BACK);
            //context.rendering_program.visualize(context, this.obj)
            this.visualize(context, prog);
        }
    }
    exit(context) {
    }
    visualize_selection(context) {
        //context.gl.useProgram(this.shaderProgram)
        let selection_program = context.rendering_program_manager.get_program(context, CxRenderingProgramSelection);
        //selection_program.begin()
        selection_program.activate(context);
        context.gl.uniformMatrix4fv(selection_program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(selection_program.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniform4fv(selection_program.colorUniform, CxNameManager.toColor(context.name));
        if (this.selection_vertex_buf == null) {
            this.selection_vertex_buf = context.gl.createBuffer();
        }
        //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(selection_program.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.selection_vertex_buf);
        let triangle_vertices = this.obj.vertices(context);
        let triangle_count = triangle_vertices.length / 3;
        context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(selection_program.vertexPositionAttribute, 3, // 3 values per axis
        context.gl.FLOAT, false, 0, 0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
    }
}

//export class CxNodePayloadVisualizer implements CxNodePayload {
class CxVisualizerColorArray extends CxVisualizer {
    constructor(obj) {
        super(CxRenderingProgramColorArray, obj);
        //obj: CxGeometry;
        //rendering_program: any;
        //color = [1.0, 0.0, 0.0, 1.0];
        this.vertex_buf = null;
        this.color_buf = null;
        //this.obj = obj
        //this.rendering_program = rendering_program
    }
    //visualize(context: CxRenderingContext, obj: CxGeometry): void {
    visualize(context, program_param) {
        var program = program_param;
        this.obj.preorder(context);
        //context.gl.useProgram(this.shaderProgram)
        program.activate(context);
        context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
        //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
        }
        context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
        //TODO: optimize
        var triangle_vertices = this.obj.vertices(context);
        var triangle_count = triangle_vertices.length / 3;
        context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexPositionAttribute, 3, // 3 values per axis
        context.gl.FLOAT, false, 0, 0);
        //var color_buf: [WebGLBuffer, number] = obj.getColorBuffer(context)
        if (this.color_buf == null) {
            this.color_buf = context.gl.createBuffer();
        }
        context.gl.enableVertexAttribArray(program.vertexColorAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.color_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.colors(context), context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexColorAttribute, 4, // 4 values per color
        context.gl.FLOAT, false, 0, 0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
    }
}

class CxRenderingProgramPalos extends CxRenderingProgram {
    configure(context) {
        context.gl.useProgram(this.shaderProgram);
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorActiveUniform = context.gl.getUniformLocation(this.shaderProgram, "uColorActive");
        this.colorPassiveUniform = context.gl.getUniformLocation(this.shaderProgram, "uColorPassive");
        this.intervalUniform = context.gl.getUniformLocation(this.shaderProgram, "uInterval");
    }
    getFragmentShaderSource() {
        return `precision mediump float;

                uniform vec4 uColorActive;
                uniform vec4 uColorPassive;
                uniform float uInterval;

                void main(void) {
                    float window = uInterval;
                    float snapped = floor(gl_FragCoord.x / window) * window;
                    float usage = (gl_FragCoord.x - snapped) / window;
                    bool use = usage > 0.5;
                    float c = 1.0;
                    if (use) {
                     gl_FragColor = uColorActive;
                    }else
                    {
                     gl_FragColor = uColorPassive;
                    }
                }
                `;
    }
    getVertexShaderSource() {
        return `attribute vec3 aVertexPosition;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                  }
                `;
    }
}

//export class CxNodePayloadVisualizer implements CxNodePayload {
class CxVisualizerPalos extends CxVisualizer {
    constructor(obj) {
        super(CxRenderingProgramPalos, obj);
        //obj: CxGeometry;
        //rendering_program: any;
        //color = [1.0, 0.0, 0.0, 1.0];
        this.vertex_buf = null;
        //color_buf: WebGLBuffer = null;
        this.color_active = [1.0, 1.0, 1.0, 1.0];
        this.color_passive = [0.0, 0.0, 0.0, 1.0];
        this.interval = 3.0;
        //this.obj = obj
        //this.rendering_program = rendering_program
    }
    //visualize(context: CxRenderingContext, obj: CxGeometry): void {
    visualize(context, program_param) {
        var program = program_param;
        this.obj.preorder(context);
        //context.gl.useProgram(this.shaderProgram)
        program.activate(context);
        context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniform4fv(program.colorActiveUniform, this.color_active);
        context.gl.uniform4fv(program.colorPassiveUniform, this.color_passive);
        context.gl.uniform1f(program.intervalUniform, this.interval);
        //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
        }
        context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
        //TODO: optimize
        var triangle_vertices = this.obj.vertices(context);
        var triangle_count = triangle_vertices.length / 3;
        context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexPositionAttribute, 3, // 3 values per axis
        context.gl.FLOAT, false, 0, 0);
        /*
        //var color_buf: [WebGLBuffer, number] = obj.getColorBuffer(context)
        if (this.color_buf == null) {
          this.color_buf = context.gl.createBuffer();
        }
        context.gl.enableVertexAttribArray(program.vertexColorAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.color_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.colors(context), context.gl.STATIC_DRAW);
        */
        // context.gl.vertexAttribPointer(program.vertexColorAttribute,
        //     4, // 4 values per color
        //     context.gl.FLOAT,
        //     false,
        //     0,
        //     0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
    }
}

class CxRenderingProgramTextured extends CxRenderingProgram {
    configure(context) {
        context.gl.useProgram(this.shaderProgram);
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexTexAttribute = context.gl.getAttribLocation(this.shaderProgram, "aTexCoords");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "uColor");
    }
    getFragmentShaderSource() {
        return `precision mediump float;

                varying vec2 vTexCoords;

                uniform sampler2D uTexture;
                uniform vec4 uColor;

                void main(void) {
                      gl_FragColor = texture2D(uTexture, vTexCoords) * uColor;
                    }
                `;
    }
    getVertexShaderSource() {
        return `attribute vec3 aVertexPosition;
                attribute vec2 aTexCoords;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  varying vec2 vTexCoords;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      vTexCoords = aTexCoords;
                  }
                `;
    }
}

//export class CxNodePayloadVisualizer implements CxNodePayload {
class CxVisualizerTextured extends CxVisualizer {
    constructor(obj, texture) {
        super(CxRenderingProgramTextured, obj);
        this.vertex_buf = null;
        this.tex_buf = null;
        this.texture = texture;
        this.color = [1.0, 1.0, 1.0, 1.0];
        //this.obj = obj
        //this.rendering_program = rendering_program
    }
    //visualize(context: CxRenderingContext, obj: CxGeometry): void {
    visualize(context, program_param) {
        if (!this.texture.activate(context)) {
            return;
        }
        //console.log("******")
        this.obj.preorder(context);
        let program = program_param;
        //context.gl.useProgram(this.shaderProgram)
        program.activate(context);
        context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniform4fv(program.colorUniform, this.color);
        //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
        if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
        }
        var triangle_vertices = this.obj.vertices(context);
        var triangle_count = triangle_vertices.length / 3;
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexPositionAttribute, 3, // 3 values per axis
        context.gl.FLOAT, false, 0, 0);
        //var tex_buf: [WebGLBuffer, number] = this.obj.getTexBuffer(context)
        context.gl.enableVertexAttribArray(program.vertexTexAttribute);
        if (this.tex_buf == null) {
            this.tex_buf = context.gl.createBuffer();
        }
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.tex_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.texture(context), context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexTexAttribute, 2, // 4 values per color
        context.gl.FLOAT, false, 0, 0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
        this.texture.deactivate(context);
        //console.log("444")
    }
}

class CxRenderingProgramLines extends CxRenderingProgram {
    configure(context) {
        context.gl.useProgram(this.shaderProgram);
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "vColor");
    }
    getFragmentShaderSource() {
        return `precision mediump float;

                uniform vec4 vColor;

                void main(void) {
                      gl_FragColor = vColor;
                    }
                `;
    }
    getVertexShaderSource() {
        return `attribute vec3 aVertexPosition;

                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
                      //vColor = aVertexColor;
                  }
                `;
    }
}

//export class CxNodePayloadVisualizer implements CxNodePayload {
class CxVisualizerLines extends CxVisualizer {
    //color_buf: WebGLBuffer = null;
    constructor(obj, color) {
        super(CxRenderingProgramLines, obj);
        //obj: CxGeometry;
        //rendering_program: any;
        //color = [1.0, 0.0, 0.0, 1.0];
        this.vertex_buf = null;
        this.color = color;
        this.strip = false;
        //this.obj = obj
        //this.rendering_program = rendering_program
    }
    //visualize(context: CxRenderingContext, obj: CxGeometry): void {
    visualize(context, program_param) {
        var program = program_param;
        this.obj.preorder(context);
        //context.gl.useProgram(this.shaderProgram)
        var vertices = this.obj.vertices(context);
        if (vertices.length == 0) {
            return;
        }
        program.activate(context);
        context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniform4fv(program.colorUniform, this.color);
        //var vertex_buf: [WebGLBuffer, number] = obj.getVertexBuffer(context)
        if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
        }
        context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
        //TODO: optimize
        var line_count = vertices.length / 3;
        context.gl.bufferData(context.gl.ARRAY_BUFFER, vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexPositionAttribute, 3, // 3 values per axis
        context.gl.FLOAT, false, 0, 0);
        /*
        //var color_buf: [WebGLBuffer, number] = obj.getColorBuffer(context)
        if (this.color_buf == null) {
          this.color_buf = context.gl.createBuffer();
        }
        context.gl.enableVertexAttribArray(program.vertexColorAttribute);
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.color_buf);
        //TODO: optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.colors(context), context.gl.STATIC_DRAW);

        context.gl.vertexAttribPointer(program.vertexColorAttribute,
            4, // 4 values per color
            context.gl.FLOAT,
            false,
            0,
            0);
        */
        if (this.strip) {
            context.gl.drawArrays(context.gl.LINE_STRIP, 0, line_count - 1);
        }
        else {
            context.gl.drawArrays(context.gl.LINES, 0, line_count);
        }
    }
}

class CxRenderingProgramAngularAlpha extends CxRenderingProgram {
    configure(context) {
        context.gl.useProgram(this.shaderProgram);
        this.vertexPositionAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.vertexNormalAttribute = context.gl.getAttribLocation(this.shaderProgram, "aVertexNormal");
        this.colorUniform = context.gl.getUniformLocation(this.shaderProgram, "vColor");
        this.pMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.mvMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.normalMatrixUniform = context.gl.getUniformLocation(this.shaderProgram, "uNormalMatrix");
    }
    getFragmentShaderSource() {
        return `precision mediump float;

                uniform vec4 vColor;
                varying float alpha;

                void main(void) {
                      gl_FragColor = vec4(vColor.rgb, alpha);
                    }
                `;
    }
    getVertexShaderSource() {
        return `attribute vec3 aVertexPosition;
                attribute vec3 aVertexNormal;

                  uniform mat4 uNormalMatrix;
                  uniform mat4 uMVMatrix;
                  uniform mat4 uPMatrix;

                  varying float alpha;

                  void main(void) {
                      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

                      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
                      highp vec3 directionalVector = vec3(0, 0, 1.0);

                      vec3 normalized_normal = normalize(vec3(transformedNormal));

                      highp float angle = abs(dot(normalized_normal.xyz, directionalVector));

                      highp float opacity = 1.0 - abs(angle);

                      alpha = opacity * opacity * opacity;
                  }
                `;
    }
}

class CxVisualizerAngularAlpha extends CxVisualizer {
    constructor(obj, color) {
        super(CxRenderingProgramAngularAlpha, obj);
        this.color = [1.0, 0.0, 0.0, 1.0];
        this.vertex_buf = null;
        this.normal_buf = null;
        this.color = color;
    }
    visualize(context, program_param) {
        this.obj.preorder(context);
        let program = program_param;
        program.activate(context);
        context.gl.uniformMatrix4fv(program.pMatrixUniform, false, context.pMatrix);
        context.gl.uniformMatrix4fv(program.mvMatrixUniform, false, context.mvMatrix);
        context.gl.uniformMatrix4fv(program.normalMatrixUniform, false, context.normalMatrix);
        context.gl.uniform4fv(program.colorUniform, this.color);
        context.gl.enableVertexAttribArray(program.vertexPositionAttribute);
        if (this.vertex_buf == null) {
            this.vertex_buf = context.gl.createBuffer();
        }
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.vertex_buf);
        //TODO: optimize
        var triangle_vertices = this.obj.vertices(context);
        var triangle_count = triangle_vertices.length / 3;
        context.gl.bufferData(context.gl.ARRAY_BUFFER, triangle_vertices, context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexPositionAttribute, 3, // 3 values per axis
        context.gl.FLOAT, false, 0, 0);
        //var normal_buf: [WebGLBuffer, number] = obj.getNormalBuffer(context)
        context.gl.enableVertexAttribArray(program.vertexNormalAttribute);
        if (this.normal_buf == null) {
            this.normal_buf = context.gl.createBuffer();
        }
        context.gl.bindBuffer(context.gl.ARRAY_BUFFER, this.normal_buf);
        //TODO optimize
        context.gl.bufferData(context.gl.ARRAY_BUFFER, this.obj.normals(context), context.gl.STATIC_DRAW);
        context.gl.vertexAttribPointer(program.vertexNormalAttribute, 3, // 3 coord per normal
        context.gl.FLOAT, false, 0, 0);
        context.gl.drawArrays(context.gl.TRIANGLES, 0, triangle_count);
    }
}

class CxTexture {
    constructor() {
        this.loading_started = false;
        this.texture = null;
    }
    handleTextureLoaded(gl, image) {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
        this.texture = texture;
    }
    activate(context) {
        if (!this.loading_started) {
            this.loading_started = true;
            this.load(context);
        }
        if (this.texture != null) {
            context.gl.bindTexture(context.gl.TEXTURE_2D, this.texture);
            return true;
        }
        return false;
    }
    deactivate(context) {
        context.gl.bindTexture(context.gl.TEXTURE_2D, null);
    }
}

class CxTextureImage extends CxTexture {
    constructor(url) {
        super();
        this.url = url;
    }
    load(context) {
        let image = new Image();
        image.onload = () => {
            this.handleTextureLoaded(context.gl, image);
        };
        console.log("loading:", this.url);
        image.src = this.url;
    }
}

class CxTexChar {
    constructor(tex_x0, tex_y0, tex_x1, tex_y1, w) {
        this.tex_x0 = tex_x0;
        this.tex_y0 = tex_y0;
        this.tex_x1 = tex_x1;
        this.tex_y1 = tex_y1;
        this.w = w;
    }
}
class CxTextureFont extends CxTexture {
    constructor(font, size) {
        super();
        this.font_tex_coords = new Map();
        //this.url = url;
        this.font = font;
        this.size = size;
        this.start_char = ' ';
        this.end_char = '~';
        this.fillStyle = 'white';
        this.font_canvas_width = 0;
        this.font_canvas_height = 0;
    }
    load(context) {
        var chr_code_start = this.start_char.charCodeAt(0);
        var chr_code_end = this.end_char.charCodeAt(0);
        var char_count = chr_code_end - chr_code_start;
        var sqare_count = Math.sqrt(char_count);
        var size1d = sqare_count * this.size;
        let size_power = Math.round(Math.ceil(Math.log2(size1d)));
        let canvas_width = Math.round(Math.pow(2, size_power));
        let canvas_height = Math.round(Math.pow(2, size_power));
        let canvas = document.createElement("canvas");
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        this.font_canvas_width = canvas_width;
        this.font_canvas_height = canvas_height;
        let ctx = canvas.getContext("2d");
        ctx.font = this.size + "px " + this.font;
        let current_y = 0;
        let current_x = 0;
        for (var i = chr_code_start; i <= chr_code_end; i++) {
            var character = String.fromCharCode(i);
            var text_dim = ctx.measureText(character);
            var char_w = text_dim.width;
            var char_h = this.size;
            if ((current_x + char_w) > canvas_width) {
                current_y += char_h;
                current_x = 0;
            }
            var pos_x = current_x;
            var pos_y = current_y + char_h;
            let k = char_h * 0.2;
            let tex_y1 = canvas_height - current_y - k;
            let tex_y0 = canvas_height - current_y - char_h - k;
            this.font_tex_coords.set(character, new CxTexChar(pos_x / canvas_width, tex_y0 / canvas_height, (pos_x + char_w) / canvas_width, tex_y1 / canvas_height, char_w / char_h));
            ctx.fillStyle = this.fillStyle;
            ctx.fillText(character, pos_x, pos_y);
            //ctx.fillText(character, pos_x, pos_y);
            //ctx.fillText(character, pos_x, pos_y);
            //ctx.fillText(character, pos_x, pos_y);
            current_x += char_w;
        }
        context.gl.pixelStorei(context.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        this.handleTextureLoaded(context.gl, canvas);
        context.gl.pixelStorei(context.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
    }
}

//import * as glmatrix from "gl-matrix";
// Performs name loading
class CxSelectableBackground {
    //_stored_name: number;
    //myname: number; //TODO - should be a string or maybe even any?
    constructor() {
        //this.myname = myname;
    }
    enter(context) {
        //this._stored_name = context.name;
        //context.name = this.myname
        if (context.mode == CxRenderingMode.CxSelection) {
            let name_color = CxNameManager.toColor(context.name);
            context.gl.clearColor(name_color[0], name_color[1], name_color[2], 1.0);
            context.gl.clear(context.gl.COLOR_BUFFER_BIT);
        }
    }
    exit(context) {
        //context.name = this._stored_name;
    }
}

class CxNodePayloadViewport {
    constructor() {
        this.viewport = [0.0, 0.0, 1.0, 1.0];
        this.clear_color = [1.0, 1.0, 1.0, 1.0];
        this.clear_depth_buffer = true;
        this.clear_color_buffer = true;
        this.enable_depth_test = true;
    }
    enter(context) {
        this._stored_current_relative_viewport = context.current_relative_viewport.slice();
        context.current_relative_viewport = [this.viewport[0],
            this.viewport[1],
            this.viewport[2],
            this.viewport[3]];
        let viewport_x = Math.floor(this.viewport[0] * context.canvas_width);
        let viewport_y = Math.floor(this.viewport[1] * context.canvas_height);
        let viewport_w = Math.floor(this.viewport[2] * context.canvas_width);
        let viewport_h = Math.floor(this.viewport[3] * context.canvas_height);
        context.gl.scissor(viewport_x, viewport_y, viewport_w, viewport_h);
        context.gl.viewport(viewport_x, viewport_y, viewport_w, viewport_h);
        // console.log("vp", viewport_x,
        //     viewport_y,
        //     viewport_w,
        //     viewport_h)
        if (context.mode != CxRenderingMode.CxSelection) {
            context.gl.clearColor(this.clear_color[0], this.clear_color[1], this.clear_color[2], this.clear_color[3]);
        }
        let buffers_to_clear = 0x00;
        if (this.clear_color_buffer) {
            buffers_to_clear = buffers_to_clear | context.gl.COLOR_BUFFER_BIT;
        }
        if (this.clear_depth_buffer) {
            buffers_to_clear = buffers_to_clear | context.gl.DEPTH_BUFFER_BIT;
        }
        context.gl.clear(buffers_to_clear);
        if (this.enable_depth_test) {
            context.gl.enable(context.gl.DEPTH_TEST);
        }
        else {
            context.gl.disable(context.gl.DEPTH_TEST);
        }
    }
    exit(context) {
        context.current_relative_viewport = this._stored_current_relative_viewport.slice();
        let viewport_x = Math.floor(context.current_relative_viewport[0] * context.canvas_width);
        let viewport_y = Math.floor(context.current_relative_viewport[1] * context.canvas_height);
        let viewport_w = Math.floor(context.current_relative_viewport[2] * context.canvas_width);
        let viewport_h = Math.floor(context.current_relative_viewport[3] * context.canvas_height);
        context.gl.scissor(viewport_x, viewport_y, viewport_w, viewport_h);
        context.gl.viewport(viewport_x, viewport_y, viewport_w, viewport_h);
        //context.gl.clear(context.gl.COLOR_BUFFER_BIT | context.gl.DEPTH_BUFFER_BIT)
    }
}

class CxNodePayloadPerspective {
    constructor() {
        this.angle = 45.0;
        this.znear = 0.1;
        this.zfar = 100.0;
    }
    enter(context) {
        let width = context.current_relative_viewport[2];
        let height = context.current_relative_viewport[3];
        identity$3(context.pMatrix);
        perspective(context.pMatrix, this.angle, width / height, this.znear, this.zfar);
    }
    exit(context) {
    }
}

class CxNodePayloadOrtho {
    constructor() {
        this.left = 0.0;
        this.bottom = 0.0;
        this.top = 1.0;
        this.right = 1.0;
        this.near = -10.0;
        this.far = 10.0;
    }
    enter(context) {
        identity$3(context.pMatrix);
        ortho(context.pMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
    }
    exit(context) {
    }
}

class CxNodePayloadTransform {
    constructor() {
        this.translate = [0.0, 0.0, 0.0];
        this.rotate = [0.0, 0.0, 0.0];
        this.scale = [1.0, 1.0, 1.0];
        this._stored = create$3();
    }
    enter(context) {
        copy$3(this._stored, context.mvMatrix);
        translate$2(context.mvMatrix, context.mvMatrix, this.translate);
        rotate$3(context.mvMatrix, context.mvMatrix, this.rotate[0], [1.0, 0.0, 0.0]);
        rotate$3(context.mvMatrix, context.mvMatrix, this.rotate[1], [0.0, 1.0, 0.0]);
        rotate$3(context.mvMatrix, context.mvMatrix, this.rotate[2], [0.0, 0.0, 1.0]);
        scale$3(context.mvMatrix, context.mvMatrix, this.scale);
        context.updateNormalMatrix();
    }
    exit(context) {
        copy$3(context.mvMatrix, this._stored);
    }
}

// Node that sets context into selection mode and captures pixels colors
// after pass
class CxNodePayloadInteractive {
    constructor(canvas, scene) {
        this.process_onmousemove = (e) => {
            let xyrxry = this.relative_xy(e);
            let x = xyrxry[0];
            let y = xyrxry[1];
            let rx = xyrxry[2];
            let ry = xyrxry[3];
            let name_color = this.name_color_at(x, y);
            let name = CxNameManager.fromColor(name_color);
            let obj = this._scene.name_manager.getObject(name);
            //console.log("@ x:",x," y:",y,' selected:', obj);
            for (let proc of this.pointer_processors) {
                proc.moved(this, obj, rx, ry);
            }
        };
        this.process_onmousedown = (e) => {
            let xyrxry = this.relative_xy(e);
            let x = xyrxry[0];
            let y = xyrxry[1];
            let rx = xyrxry[2];
            let ry = xyrxry[3];
            let name_color = this.name_color_at(x, y);
            let name = CxNameManager.fromColor(name_color);
            let obj = this._scene.name_manager.getObject(name);
            //console.log("@ x:",x," y:",y,' selected:', obj);
            for (let proc of this.pointer_processors) {
                proc.pressed(this, obj, rx, ry);
            }
            if (obj != null) {
                obj.pressed(this, obj, rx, ry);
            }
        };
        this.process_onmouseup = (e) => {
            let xyrxry = this.relative_xy(e);
            let x = xyrxry[0];
            let y = xyrxry[1];
            let rx = xyrxry[2];
            let ry = xyrxry[3];
            let name_color = this.name_color_at(x, y);
            let name = CxNameManager.fromColor(name_color);
            let obj = this._scene.name_manager.getObject(name);
            //console.log("@ x:",x," y:",y,' selected:', obj);
            for (let proc of this.pointer_processors) {
                proc.released(this, obj, rx, ry);
            }
        };
        this._canvas = canvas;
        this._scene = scene;
        this.selection_rendering_program = new CxRenderingProgramSelection();
        this._pixels = null;
        this.pointer_processors = new Set();
        this._canvas.onmousemove = this.process_onmousemove;
        this._canvas.onmouseup = this.process_onmouseup;
        this._canvas.onmousedown = this.process_onmousedown;
    }
    addPointerEventsProcessor(processor) {
        if (!this.pointer_processors.has(processor)) {
            this.pointer_processors.add(processor);
        }
    }
    removePointerEventsProcessor(processor) {
        if (this.pointer_processors.has(processor)) {
            this.pointer_processors.delete(processor);
        }
    }
    enter(context) {
        context.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        context.gl.clear(context.gl.COLOR_BUFFER_BIT);
        this._stored_mode = context.mode;
        context.mode = CxRenderingMode.CxSelection;
    }
    exit(context) {
        //this.selection_rendering_program.exit(context)
        context.mode = this._stored_mode;
        let tmp_pixels = new Uint8Array(context.canvas_width * context.canvas_height * 4);
        this._pixels_w = context.canvas_width;
        this._pixels_h = context.canvas_height;
        context.gl.readPixels(0, 0, context.canvas_width, context.canvas_height, context.gl.RGBA, context.gl.UNSIGNED_BYTE, tmp_pixels);
        this._pixels = tmp_pixels;
    }
    name_color_at(x, y) {
        let inv_y = this._pixels_h - y;
        let pos_in_array = ((inv_y * this._pixels_w) + x) * 4;
        let tmp_pixels = this._pixels;
        let index = Math.round(pos_in_array);
        return [tmp_pixels[index] / 255.0,
            tmp_pixels[index + 1] / 255.0,
            tmp_pixels[index + 2] / 255.0,
            tmp_pixels[index + 3] / 255.0];
    }
    relative_xy(e) {
        let rect = this._canvas.getBoundingClientRect();
        let rx = (e.clientX - rect.left) / (rect.right - rect.left);
        let ry = (e.clientY - rect.top) / (rect.bottom - rect.top);
        let x = Math.round(rx * this._canvas.clientWidth);
        let y = Math.round(ry * this._canvas.clientHeight);
        return [x, y, rx, 1.0 - ry];
    }
}

// Performs name loading
class CxNodePayloadName {
    constructor(myname) {
        this.myname = myname;
    }
    enter(context) {
        this._stored_name = context.name;
        context.name = this.myname;
    }
    exit(context) {
        context.name = this._stored_name;
    }
}

var CxProjectionCompensation;
(function (CxProjectionCompensation) {
    CxProjectionCompensation[CxProjectionCompensation["CxNoCompensation"] = 1] = "CxNoCompensation";
    CxProjectionCompensation[CxProjectionCompensation["CxVCompensation"] = 2] = "CxVCompensation";
    CxProjectionCompensation[CxProjectionCompensation["CxHCompensation"] = 3] = "CxHCompensation";
})(CxProjectionCompensation || (CxProjectionCompensation = {}));
class CxNodePayloadLabel {
    constructor(font, text) {
        //super(false);
        this.text = text; //"Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit"
        this.font = font; //new CxNodePayloadTextureFont("Helvetica", 30)
        this.compensation = CxProjectionCompensation.CxHCompensation;
        this.visualizer = new CxVisualizerTextured(this, font);
    }
    vertices(context) {
        let result = new Array();
        let carret = 0.0;
        for (var char of this.text) {
            var tex_char = this.font.font_tex_coords.get(char);
            // TODO: this is not correct it must be canvas_height * current_relative_viewport[3]
            //var ch_height: number = this.font.size / (context.canvas_width * context.current_relative_viewport[2]);
            /*
            let smallest_axe = Math.max((context.canvas_height * context.current_relative_viewport[3]),
                                        (context.canvas_width * context.current_relative_viewport[2]))
            */
            let true_w = context.canvas_width * context.current_relative_viewport[2];
            let true_h = context.canvas_height * context.current_relative_viewport[3];
            //let sz_w = Math.sqrt( (true_w * true_w) + (true_h * true_h) )
            //let sz_w = (true_w + true_h) / 2.0
            //let sz_f = Math.Sqrt( (this.font.size * this.font.size) )
            let sz_w = Math.max(true_w, true_h);
            /*
            let sz_w = 0.0;
            if (true_w > true_h) {
              sz_w = true_h;
            }
            else {
              sz_w = true_w;
            }
            */
            //Math.pow(smallest_axe, 2.0)
            var ch_height = this.font.size / sz_w;
            //var ch_width: number = (ch_height * tex_char.w)
            var ch_width = (ch_height * tex_char.w);
            // if (this.compensation == CxProjectionCompensation.CxHCompensation) {
            //   ch_width = ch_width / ( (context.current_relative_viewport[2] * context.canvas_width)  /  (context.current_relative_viewport[3] * context.canvas_height));
            // }
            // else if (this.compensation == CxProjectionCompensation.CxVCompensation) {
            //   ch_width = ch_width * ( (context.current_relative_viewport[2] * context.canvas_width)  /  (context.current_relative_viewport[3] * context.canvas_height));
            // }
            //var ch_width: number = (ch_height * tex_char.w) / ( (context.current_relative_viewport[2] * context.canvas_width)  /  (context.current_relative_viewport[3] * context.canvas_height));
            // TODO: fix concatenation in TS
            let a = [carret, 0.0, 0.0,
                carret + ch_width, 0.0, 0.0,
                carret + ch_width, ch_height, 0.0,
                carret + ch_width, ch_height, 0.0,
                carret, ch_height, 0.0,
                carret, 0.0, 0.0];
            for (let e of a) {
                result.push(e);
            }
            carret += ch_width;
        }
        return new Float32Array(result);
    }
    colors(context) {
        return new Float32Array([]);
    }
    normals(context) {
        return new Float32Array([]);
    }
    preorder(context) {
        //return new Float32Array([])
    }
    texture(context) {
        let result = new Array();
        let carret = 0.0;
        for (var char of this.text) {
            var tex_char = this.font.font_tex_coords.get(char);
            // TODO: fix TypeScript concatenation
            let a = [tex_char.tex_x0, tex_char.tex_y0,
                tex_char.tex_x1, tex_char.tex_y0,
                tex_char.tex_x1, tex_char.tex_y1,
                tex_char.tex_x1, tex_char.tex_y1,
                tex_char.tex_x0, tex_char.tex_y1,
                tex_char.tex_x0, tex_char.tex_y0];
            for (let e of a) {
                result.push(e);
            }
        }
        return new Float32Array(result);
    }
    enter(context) {
        //this.font.enter(context)
        this.font.activate(context);
        context.gl.blendFunc(context.gl.ONE, context.gl.ONE_MINUS_SRC_ALPHA);
        this.visualizer.enter(context);
        context.gl.blendFunc(context.gl.SRC_ALPHA, context.gl.ONE_MINUS_SRC_ALPHA);
    }
    exit(context) {
        this.visualizer.exit(context);
        this.font.deactivate(context);
        //this.font.exit(context)
    }
}

//import { CxNodePayloadVisualizer } from './node_payload_visualizer'
//import { CxRenderingProgramAngularAlpha } from './rendering_program_angular_alpha'
class CxCylinder {
    constructor(pos, r, h) {
        this.sections = 3;
        this.segments = 24;
        this.pos = pos;
        this.r = r;
        this.h = h;
    }
    preorder(context) {
        //pre-order allways called first
        this.points_array = new Array();
        this.color_array = new Array();
        this.normals_array = new Array();
        this.tex_array = new Array();
        let pi = Math.PI;
        for (let vertical_section = 0; vertical_section < this.sections; vertical_section++) {
            for (let angle_segment = 0; angle_segment < this.segments; angle_segment++) {
                let angle_0 = (angle_segment / this.segments) * (pi * 2.0);
                let angle_1 = ((angle_segment + 1) / this.segments) * (pi * 2.0);
                let layer_0 = (vertical_section / this.sections);
                let layer_1 = ((vertical_section + 1) / this.sections);
                layer_0 = (layer_0 * this.h);
                layer_1 = (layer_1 * this.h);
                //    p2 ---- p3
                //     |     / |
                // z   |   /   |
                //     | /     |
                //    p0 ----- p1
                //       xy
                //TODO: multiply by size
                let p0_x = Math.sin(angle_0);
                let p0_y = Math.cos(angle_0);
                let p0_z = layer_0;
                let p1_x = Math.sin(angle_1);
                let p1_y = Math.cos(angle_1);
                let p1_z = layer_0;
                let p2_x = Math.sin(angle_0);
                let p2_y = Math.cos(angle_0);
                let p2_z = layer_1;
                let p3_x = Math.sin(angle_1);
                let p3_y = Math.cos(angle_1);
                let p3_z = layer_1;
                let n0_x = Math.sin(angle_0);
                let n0_y = Math.cos(angle_0);
                let n0_z = 0.0;
                let n1_x = Math.sin(angle_1);
                let n1_y = Math.cos(angle_1);
                let n1_z = 0.0;
                let n2_x = Math.sin(angle_0);
                let n2_y = Math.cos(angle_0);
                let n2_z = 0.0;
                let n3_x = Math.sin(angle_1);
                let n3_y = Math.cos(angle_1);
                let n3_z = 0.0;
                let t0_x = angle_segment / this.segments;
                let t1_x = (angle_segment + 1) / this.segments;
                let t0_y = vertical_section / this.sections;
                let t1_y = (vertical_section + 1) / this.sections;
                //p0
                this.points_array.push(p0_x);
                this.points_array.push(p0_y);
                this.points_array.push(p0_z);
                this.normals_array.push(n0_x);
                this.normals_array.push(n0_y);
                this.normals_array.push(n0_z);
                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])
                this.tex_array.push(t0_x);
                this.tex_array.push(t0_y);
                //p1
                this.points_array.push(p1_x);
                this.points_array.push(p1_y);
                this.points_array.push(p1_z);
                this.normals_array.push(n1_x);
                this.normals_array.push(n1_y);
                this.normals_array.push(n1_z);
                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])
                this.tex_array.push(t1_x);
                this.tex_array.push(t0_y);
                //p3
                this.points_array.push(p3_x);
                this.points_array.push(p3_y);
                this.points_array.push(p3_z);
                this.normals_array.push(n3_x);
                this.normals_array.push(n3_y);
                this.normals_array.push(n3_z);
                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])
                this.tex_array.push(t1_x);
                this.tex_array.push(t1_y);
                //triangle 2
                //p0
                this.points_array.push(p0_x);
                this.points_array.push(p0_y);
                this.points_array.push(p0_z);
                this.normals_array.push(n0_x);
                this.normals_array.push(n0_y);
                this.normals_array.push(n0_z);
                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])
                this.tex_array.push(t0_x);
                this.tex_array.push(t0_y);
                //p3
                this.points_array.push(p3_x);
                this.points_array.push(p3_y);
                this.points_array.push(p3_z);
                this.normals_array.push(n3_x);
                this.normals_array.push(n3_y);
                this.normals_array.push(n3_z);
                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])
                this.tex_array.push(t1_x);
                this.tex_array.push(t1_y);
                //p2
                this.points_array.push(p2_x);
                this.points_array.push(p2_y);
                this.points_array.push(p2_z);
                this.normals_array.push(n2_x);
                this.normals_array.push(n2_y);
                this.normals_array.push(n2_z);
                // this.color_array.push(this.color[0])
                // this.color_array.push(this.color[1])
                // this.color_array.push(this.color[2])
                // this.color_array.push(this.color[3])
                this.tex_array.push(t0_x);
                this.tex_array.push(t1_y);
            }
        }
        //return new Float32Array(this.points_array)
    }
    vertices(context) {
        return new Float32Array(this.points_array);
    }
    colors(context) {
        //return new Float32Array(this.color_array)
        return new Float32Array([]);
    }
    texture(context) {
        return new Float32Array(this.tex_array);
    }
    normals(context) {
        return new Float32Array(this.normals_array);
    }
}

class CxStyle {
    constructor() {
        this.background = [0.1450, 0.2823, 0.3607, 1.0];
        this.fill_primary = [0.01, 0.01, 0.35, 1.0];
        this.fill_secondary = [0.01, 0.01, 0.40, 1.0];
        this.contour = [1.0, 1.0, 1.0, 0.1];
        this.glow_start = [0.1, 0.1, 0.8, 0.2];
        this.glow_end = [0.1, 0.1, 0.7, 0.0];
        this.glow_size = 0.01;
        this.contour_size = 0.01;
    }
}

/**
 * Scene keeps persistent information about scene, scene can be
 * accessed from context during rendering of every node.
 * NameManager, RootNode, Style is encapsulated in Scene
 *
 * @class CxScene
 */
class CxScene {
    constructor() {
        this.name_manager = new CxNameManager();
        this.style = new CxStyle();
    }
}

class CxUIElement {
    constructor(scene) {
        this._scene = scene;
    }
}

/*
 this is 2d arrow pointing up. allong Y-axis


*/
class CxArrow extends CxUIElement {
    constructor(scene) {
        super(scene);
        this.arrow_geometry = new ArrowGeometry();
        this.visualizer = new CxVisualizerColorArray(this.arrow_geometry);
    }
    enter(context) {
        //console.log('{{')
        this.visualizer.enter(context);
    }
    exit(context) {
        //console.log('}}')
        this.visualizer.exit(context);
    }
}
class ArrowGeometry {
    preorder(context) {
    }
    vertices(context) {
        //console.log('(((())))')
        return new Float32Array([
            0.0, 1.0, 0.0,
            0.4, 0.0, 0.0,
            -0.4, 0.0, 0.0,
        ]);
    }
    colors(context) {
        return new Float32Array([
            1.0, 0.0, 0.0, 1.0,
            1.0, 0.0, 0.0, 1.0,
            1.0, 0.0, 0.0, 1.0,
        ]);
    }
    texture(context) {
        return null;
    }
    normals(context) {
        return null;
    }
}

var CxSplitDirection;
(function (CxSplitDirection) {
    // None?
    CxSplitDirection[CxSplitDirection["CxNoSplit"] = 1] = "CxNoSplit";
    CxSplitDirection[CxSplitDirection["CxVerticalSplit"] = 2] = "CxVerticalSplit";
    CxSplitDirection[CxSplitDirection["CxHorizontalSplit"] = 3] = "CxHorizontalSplit";
})(CxSplitDirection || (CxSplitDirection = {}));
var CxMarkerOrientation;
(function (CxMarkerOrientation) {
    // None?
    CxMarkerOrientation[CxMarkerOrientation["CxLeft"] = 1] = "CxLeft";
    CxMarkerOrientation[CxMarkerOrientation["CxRight"] = 2] = "CxRight";
    CxMarkerOrientation[CxMarkerOrientation["CxTop"] = 3] = "CxTop";
    CxMarkerOrientation[CxMarkerOrientation["CxBottom"] = 4] = "CxBottom";
})(CxMarkerOrientation || (CxMarkerOrientation = {}));
class CxSplit {
    //coord1: number;
    //coord2: number;
    //scene_a: None
    //parent:
    //name
    //percent_w: number
    //percent_h: number
    constructor() {
        this.direction = CxSplitDirection.CxNoSplit;
        this.volume = 0.5; // 0..1 how much space it take
        this.margin = 0.000;
        this.subsplitA = null;
        this.subsplitB = null;
        this.viewportA = new CxNodePayloadViewport();
        this.viewportB = new CxNodePayloadViewport();
        this.viewportA.clear_color = [
            Math.random(),
            Math.random(),
            Math.random(),
            1.0
        ];
        this.viewportB.clear_color = [
            Math.random(),
            Math.random(),
            Math.random(),
            1.0
        ],
            this._drag = false;
    }
    pressed(source, object, screen_x, screen_y) {
        //console.log("+++")
        this._drag = true;
        this._drag_start_x = screen_x;
        this._drag_start_y = screen_y;
        this._drag_start_split = this.volume;
        source.addPointerEventsProcessor(this);
    }
    moved(source, object, screen_x, screen_y) {
        if (this._drag) {
            //console.log("xxx");
            let dx = screen_x - this._drag_start_x;
            let dy = screen_y - this._drag_start_y;
            let _w = this.viewportA.viewport[2] + this.viewportB.viewport[2];
            let _h = this.viewportA.viewport[3] + this.viewportB.viewport[3];
            if (this.direction == CxSplitDirection.CxVerticalSplit) {
                //this._drag_start_split =  this.volume;
                this.volume = this._drag_start_split + (dy / _h);
                //console.log("dy:", dy, " h:", _h, ' screeny', screen_y);
                if (this.volume < 0.1) {
                    this.volume = 0.1;
                }
            }
            else if (this.direction == CxSplitDirection.CxHorizontalSplit) {
                //this._drag_start_split =  this.volume;
                this.volume = this._drag_start_split + (dx / _w);
                if (this.volume > 0.9) {
                    this.volume = 0.9;
                }
            }
        }
    }
    released(source, object, screen_x, screen_y) {
        //console.log("---")
        this._drag = false;
        source.removePointerEventsProcessor(this);
    }
    //update_viewport(viewport: CxXYWH): void {
    //}
    enter(grid, context) {
        grid._splits.push(this);
        let viewport = context.current_relative_viewport.slice();
        if (this.direction == CxSplitDirection.CxNoSplit) {
            this.viewportA.viewport = [
                viewport[0],
                viewport[1],
                viewport[2],
                viewport[3],
            ];
            this.viewportA.enter(context);
            if (this.sceneA != null) {
                this.sceneA.enter(context);
                this.sceneA.exit(context);
            }
            this.viewportA.exit(context);
        }
        else if (this.direction == CxSplitDirection.CxVerticalSplit) {
            this.viewportA.viewport[0] = viewport[0] + this.margin;
            this.viewportA.viewport[1] = ((viewport[1]) + this.margin);
            this.viewportA.viewport[2] = viewport[2] - (this.margin * 2.0);
            this.viewportA.viewport[3] = (viewport[3] * this.volume) - (this.margin * 2.0);
            //this.viewportA.viewport[3] = 0.2;
            this.viewportB.viewport[0] = viewport[0] + this.margin;
            this.viewportB.viewport[1] = ((viewport[1] + (viewport[3] * this.volume)) + this.margin);
            this.viewportB.viewport[2] = viewport[2] - (this.margin * 2.0);
            this.viewportB.viewport[3] = (viewport[3] * (1.0 - this.volume)) - (this.margin * 2.0);
            this.viewportA.enter(context);
            if (this.sceneA != null) {
                this.sceneA.enter(context);
                this.sceneA.exit(context);
            }
            if (this.subsplitA != null) {
                this.subsplitA.enter(grid, context);
                this.subsplitA.exit(context);
            }
            this.viewportA.exit(context);
            this.viewportB.enter(context);
            if (this.sceneB != null) {
                this.sceneB.enter(context);
                this.sceneB.exit(context);
            }
            if (this.subsplitB != null) {
                this.subsplitB.enter(grid, context);
                this.subsplitB.exit(context);
            }
            this.viewportB.exit(context);
        }
        else if (this.direction == CxSplitDirection.CxHorizontalSplit) {
            this.viewportA.viewport[0] = viewport[0] + this.margin;
            this.viewportA.viewport[1] = viewport[1] + this.margin;
            this.viewportA.viewport[2] = (viewport[2] * this.volume) - (this.margin * 2.0);
            this.viewportA.viewport[3] = viewport[3] - (this.margin * 2.0);
            this.viewportB.viewport[0] = viewport[0] + (viewport[2] * this.volume) + this.margin;
            this.viewportB.viewport[1] = viewport[1] + this.margin;
            this.viewportB.viewport[2] = (viewport[2] * (1.0 - this.volume)) - (this.margin * 2.0);
            this.viewportB.viewport[3] = viewport[3] - (this.margin * 2.0);
            this.viewportA.enter(context);
            if (this.sceneA != null) {
                this.sceneA.enter(context);
                this.sceneA.exit(context);
            }
            if (this.subsplitA != null) {
                this.subsplitA.enter(grid, context);
                this.subsplitA.exit(context);
            }
            this.viewportA.exit(context);
            this.viewportB.enter(context);
            if (this.sceneB != null) {
                this.sceneB.enter(context);
                this.sceneB.exit(context);
            }
            if (this.subsplitB != null) {
                this.subsplitB.enter(grid, context);
                this.subsplitB.exit(context);
            }
            this.viewportB.exit(context);
        }
        else {
            throw new Error("Internal Error occured ivalid state");
        }
    }
    exit(context) {
    }
}
class CxGrid extends CxUIElement {
    constructor(scene) {
        super(scene);
        //console.log("Creating")
        // window coordinates start at top left
        this.proj = new CxNodePayloadOrtho();
        /*
        this.proj.left = 0.0;
        this.proj.bottom = 1.0;
        this.proj.top = 0.0;
        this.proj.right = 1.0;
        */
        //this.proj.near: number = -10.0;
        //this.proj.far: number = 10.0;
        //console.log("YeY")
        this.split = new CxSplit();
        this._splits = new Array();
        this._arrow = new CxArrow(this._scene);
        //console.log(".")
    }
    draw_arrow(context, x, y, angle, split) {
        let transform = new CxNodePayloadTransform();
        //let x = split.viewportA.viewport[0];
        //let y = split.viewportA.viewport[1];
        //let rx = x;
        //let ry = y;
        //let rx = x/w;
        //let ry = y/h;
        transform.translate = [x, y, 0.0];
        //transform.translate = [ 0,0, -5.0]
        let desired_size = 12;
        if (context.mode == CxRenderingMode.CxSelection) {
            // lets make arrow bigger when it is a selection mode
            desired_size = 16;
        }
        let scale_x = desired_size / context.canvas_width;
        let scale_y = desired_size / context.canvas_height;
        transform.scale = [scale_x, scale_y, 1.0];
        transform.rotate = [0.00, 0.00, angle];
        transform.enter(context);
        //context.gl.disable(context.gl.DEPTH_TEST);
        //console.log(">>>>", transform.translate)
        if (split.name == null) {
            let name = this._scene.name_manager.genName(split);
            split.name = new CxNodePayloadName(name);
            //split.name = new CxNodePayloadName(100)
        }
        split.name.enter(context);
        this._arrow.enter(context);
        this._arrow.exit(context);
        //context.gl.enable(context.gl.DEPTH_TEST);
        split.name.exit(context);
        transform.exit(context);
    }
    enter(context) {
        //console.log("***")
        this._stored_viewport = [
            context.current_relative_viewport[0],
            context.current_relative_viewport[1],
            context.current_relative_viewport[2],
            context.current_relative_viewport[3]
        ];
        this._splits = [];
        this.split.enter(this, context);
        this.proj.enter(context);
        let w = this._stored_viewport[2];
        let h = this._stored_viewport[3];
        //context.gl.viewport()
        //this.proj.enter(context);
        for (let split of this._splits) {
            //console.log("...")
            if (split.direction == CxSplitDirection.CxHorizontalSplit) {
                let x = split.viewportB.viewport[0];
                let y = split.viewportB.viewport[1];
                this.draw_arrow(context, x, y, 0.0, split);
                y = split.viewportB.viewport[1] + split.viewportB.viewport[3];
                this.draw_arrow(context, x, y, 3.14, split);
            }
            else if (split.direction == CxSplitDirection.CxVerticalSplit) {
                let x = split.viewportB.viewport[0];
                let y = split.viewportB.viewport[1];
                this.draw_arrow(context, x, y, (3.14 / 2.0) + 3.14, split);
                x = split.viewportB.viewport[0] + split.viewportB.viewport[2];
                this.draw_arrow(context, x, y, (3.14 / 2.0), split);
            }
        }
        //this.proj.exit(context);
    }
    exit(context) {
        //console.log("6^^^")
        this.split.exit(context);
        this.proj.exit(context);
    }
}

// widget is element with dimensions (it repots dimenstions)
// think about label, parent won't know how much space label need
// label knows, it can report to parent so it could be properly aligned
class CxUIWidget extends CxUIElement {
    constructor(scene) {
        super(scene);
    }
}

//dataset should have offset
class CxCurve {
    //Pattern
    //Thinkness
    constructor(track, name) {
        this.track = track;
        this.name = name;
        this.visualizer = new CxVisualizerLines(new CurveGeometry(this.track, this.name), [1.0, 0.0, 0.0, 1.0]);
        this.visualizer.strip = true;
    }
}
class MajorGridGeometry {
    preorder(context) { }
    vertices(context) {
        let result = [];
        for (let i = 1; i < this.track.major_divisions; i++) {
            let relative_offset = i / this.track.major_divisions;
            result.push(0.0);
            result.push(relative_offset);
            result.push(0.0);
            result.push(1.0);
            result.push(relative_offset);
            result.push(0.0);
        }
        //console.log("result ", result, result.length / 3.0)
        return new Float32Array(result);
    }
    colors(context) { return null; }
    texture(context) { return null; }
    normals(context) { return null; }
    constructor(track) {
        this.track = track;
    }
}
class MinorGridGeometry {
    preorder(context) { }
    vertices(context) {
        let result = [];
        for (let i = 0; i < this.track.major_divisions; i++) {
            let major_relative_offset = i / this.track.major_divisions;
            for (let j = 0; j < this.track.minor_divisions; j++) {
                let minor_relative_offset = major_relative_offset + (j / this.track.minor_divisions / this.track.major_divisions);
                result.push(0.0);
                result.push(minor_relative_offset);
                result.push(0.0);
                result.push(1.0);
                result.push(minor_relative_offset);
                result.push(0.0);
            }
        }
        //console.log("result ", result, result.length / 3.0)
        return new Float32Array(result);
    }
    colors(context) { return null; }
    texture(context) { return null; }
    normals(context) { return null; }
    constructor(track) {
        this.track = track;
    }
}
class IndexGridGeometry {
    preorder(context) { }
    vertices(context) {
        //let number_of_divisions = this.plot.start_index +
        let result = [];
        let number_of_divisions = Math.floor(this.track._template.index_resolution / this.track._template.index_divisions);
        for (let division = 0; division <= number_of_divisions; division++) {
            let index_pos = Math.floor(this.track._template._logplot.start_index / this.track._template.index_divisions) + division;
            let index_actual = index_pos * this.track._template.index_divisions - this.track._template._logplot.start_index;
            result.push(index_actual);
            result.push(0.0);
            result.push(0.0);
            result.push(index_actual);
            result.push(1.0);
            result.push(0.0);
        }
        return new Float32Array(result);
    }
    colors(context) { return null; }
    texture(context) { return null; }
    normals(context) { return null; }
    constructor(track) {
        this.track = track;
    }
}
class CurveGeometry {
    preorder(context) { }
    vertices(context) {
        //let number_of_divisions = this.plot.start_index +
        /*
        let result:Array<number> = []
        let number_of_divisions = Math.floor(this.track._template.index_resolution / this.track._template.index_divisions);
    
        for (let division=0; division<=number_of_divisions; division++) {
          let index_pos = Math.floor(this.track._template._logplot.start_index / this.track._template.index_divisions) + division;
          let index_actual = index_pos * this.track._template.index_divisions;
          result.push(index_actual);
          result.push(0.0);
          result.push(0.0);
    
    
          result.push(index_actual);
          result.push(1.0);
          result.push(0.0);
        }
        */
        let curve_data = this.track._template._logplot._provider.get_data(this.channel, this.track._template._logplot.start_index, this.track._template._logplot.start_index + this.track._template.index_resolution, context.current_relative_viewport[2] * context.canvas_width);
        let index = curve_data[0];
        let values = curve_data[1];
        let result = [];
        for (let i = 0; i < index.length; i++) {
            result.push(index[i] - this.track._template._logplot.start_index); //lets make plot zero base by subtracting start
            result.push(values[i]);
            result.push(0.0);
        }
        return new Float32Array(result);
    }
    colors(context) { return null; }
    texture(context) { return null; }
    normals(context) { return null; }
    constructor(track, channel) {
        this.track = track;
        this.channel = channel;
    }
}
class CxTrack {
    constructor(template, name) {
        // fills
        this.major_divisions = 2; // by how many sections divide plot
        this.minor_divisions = 5; // by how many sections divide
        this.border = 2;
        this._template = template;
        this.name = name;
        this.width = 1.0;
        this._viewport = new CxNodePayloadViewport();
        //console.log("track color:", this._viewport.clear_color)
        /*
        [
          Math.random(),
          Math.random(),
          Math.random(),
          1.0
        ]
        */
        this.visualizer_major_grid = new CxVisualizerLines(new MajorGridGeometry(this), [0.5, 0.5, 0.5, 0.050]);
        this.visualizer_minor_grid = new CxVisualizerLines(new MinorGridGeometry(this), [0.5, 0.5, 0.5, 0.025]);
        this._index_grid_geometry = new IndexGridGeometry(this);
        this.visualizer_index_grid = new CxVisualizerLines(this._index_grid_geometry, [0.3, 0.3, 0.0, 0.025]);
        this.proj_tmp = new CxNodePayloadOrtho();
        this._selectable_background = new CxSelectableBackground();
        this._track_name = new CxNodePayloadName(this._template._logplot._scene.name_manager.genName(this));
        this._drag = false;
    }
    /////////////////////////////
    pressed(source, object, screen_x, screen_y) {
        console.log("track", this.name);
        this._drag = true;
        this._drag_start_x = screen_x;
        this._drag_start_y = screen_y;
        this._drag_index = this._template._logplot.start_index;
        source.addPointerEventsProcessor(this);
    }
    moved(source, object, screen_x, screen_y) {
        console.log("dragging");
        if (this._drag) {
            //console.log("xxx");
            let dx = screen_x - this._drag_start_x;
            let dy = screen_y - this._drag_start_y;
            let _w = this._viewport.viewport[2]; //+ this._viewport.viewport[2];
            let _h = this._viewport.viewport[3]; //+ this._viewport.viewport[3];
            let relative_dx = -dx / _w;
            //let step = this._template.index_resolution / _w
            this._template._logplot.start_index = this._drag_index + (relative_dx * this._template.index_resolution);
            this._template._logplot._provider.set_range(this._template._logplot.start_index, this._template._logplot.start_index + this._template.index_resolution, _w);
            //console.log(" >>> ", this._template._logplot.start_index)
        }
    }
    released(source, object, screen_x, screen_y) {
        this._drag = true;
        source.removePointerEventsProcessor(this);
    }
    /////////////////////////////
    plot(context, vp) {
        let one_px_v = context.current_relative_viewport[3] / context.canvas_height;
        this._viewport.viewport = [
            vp[0],
            vp[1] + 0.0,
            vp[2],
            vp[3] - (one_px_v * this.border),
        ];
        this._viewport.clear_color = this._template._logplot._scene.style.background;
        this._viewport.enable_depth_test = false;
        this._viewport.enter(context);
        this._track_name.enter(context);
        this._selectable_background.enter(context);
        // making full relative projection
        this.proj_tmp.left = 0.0;
        this.proj_tmp.right = 1.0;
        this.proj_tmp.bottom = 0.0;
        this.proj_tmp.top = 1.0;
        this.proj_tmp.enter(context);
        this.visualizer_major_grid.enter(context);
        this.visualizer_minor_grid.enter(context);
        this.visualizer_minor_grid.enter(context);
        this.visualizer_major_grid.exit(context);
        this.proj_tmp.exit(context);
        // making real index projection
        this.proj_tmp.left = 0.0; //this._template._logplot.start_index;
        this.proj_tmp.right = this._template.index_resolution; // - this._template._logplot.start_index;//this._template._logplot.start_index + this._template.index_resolution;
        this.proj_tmp.enter(context);
        this.visualizer_index_grid.enter(context);
        this.visualizer_index_grid.exit(context);
        this.proj_tmp.exit(context);
        //context.gl.enable(context.gl.LINE_SMOOTH)
        for (let crv of this.curves) {
            //actual curve
            this.proj_tmp.top = crv.right;
            this.proj_tmp.bottom = crv.left;
            this.proj_tmp.enter(context);
            crv.visualizer.enter(context);
            crv.visualizer.exit(context);
            this.proj_tmp.exit(context);
        }
        //context.gl.disable(context.gl.LINE_SMOOTH)
        this._selectable_background.exit(context);
        this._track_name.exit(context);
        this._viewport.exit(context);
    }
}
class CxLogTemplate {
    constructor(logplot) {
        this._logplot = logplot;
        this.index_resolution = 100.0;
        this.index_divisions = 25.0;
        let t1 = new CxTrack(this, "track #1");
        let t2 = new CxTrack(this, "track #2");
        let t3 = new CxTrack(this, "track #3");
        this.tracks = [t1, t2, t3];
        let curve1 = new CxCurve(t1, "A");
        curve1.left = -2.0;
        curve1.right = 2.0;
        curve1.visualizer.color = [1.0, 0.0, 0.0, 1.0];
        let curve2 = new CxCurve(t1, "B");
        curve2.left = -2.0;
        curve2.right = 2.0;
        curve2.visualizer.color = [0.0, 1.0, 0.0, 1.0];
        let curve3 = new CxCurve(t2, "C");
        curve3.left = -2.0;
        curve3.right = 2.0;
        curve3.visualizer.color = [0.0, 0.0, 1.0, 1.0];
        t1.curves = [curve1, curve2];
        t2.curves = [curve3];
        t3.curves = [];
        t2.major_divisions = 3; // by how many sections divide plot
        t2.minor_divisions = 2; // by how many sections divide
        t3.major_divisions = 4; // by how many sections divide plot
        t3.minor_divisions = 5; // by how many sections divide
    }
}
class CxLogPlot extends CxUIWidget {
    constructor(scene, provider) {
        super(scene);
        this._provider = provider;
        this.template = new CxLogTemplate(this);
        this.vp = [0.0, 0.0, 1.0, 1.0];
        this.start_index = 1000.0;
        this._viewport = new CxNodePayloadViewport();
        this.font = new CxTextureFont("OCR-A", 12.0);
        this.label = new CxNodePayloadLabel(this.font, "123.3");
        this.label.compensation = CxProjectionCompensation.CxNoCompensation;
        this.label.text = "SPP: 341.057 (psi)";
        this.label.visualizer.color = [1.0, 1.0, 1.0, 0.9];
        this.transform = new CxNodePayloadTransform();
    }
    /*
    width(): number {
      return 1.0;
    }
  
    height(): number {
      return 1.0;
    }
    */
    enter(context) {
        let total_tracks_width = 0;
        for (let track of this.template.tracks) {
            //console.log("track", track)
            total_tracks_width += track.width;
        }
        //console.log("total_tracks_width", total_tracks_width)
        let client_x = this.vp[0] + context.current_relative_viewport[0];
        let client_y = this.vp[1] + context.current_relative_viewport[1];
        let client_w = this.vp[2] * context.current_relative_viewport[2];
        let client_h = this.vp[3] * context.current_relative_viewport[3];
        this._viewport.viewport = [client_x, client_y, client_w, client_h];
        this._viewport.clear_color = [0.0, 0.0, 0.0, 1.0];
        this._viewport.enter(context);
        //let client_rect: CxXYWH = [client_x, client_y, client_w, client_h]
        let track_offset = 0;
        for (let track of this.template.tracks) {
            let track_width = (track.width / total_tracks_width) * client_h;
            let track_vp = [
                client_x,
                client_y + track_offset,
                client_w,
                track_width
            ];
            track.plot(context, track_vp);
            track_offset += track_width;
        }
        context.gl.clear(context.gl.DEPTH_BUFFER_BIT);
        let ortho = new CxNodePayloadOrtho();
        let reshape = new CxNodePayloadTransform();
        ortho.left = 0.0; //this.vp[0];
        ortho.bottom = 0.0; //this.vp[1];
        ortho.right = 1.0;
        ortho.top = (client_h * context.canvas_height) / (client_w * context.canvas_width);
        ortho.enter(context);
        this.transform.translate = [1.0, 0.0, 0.0];
        this.transform.rotate = [0.0, 0.0, 3.14 / 2.0];
        this.transform.enter(context);
        //reshape.scale = [1.0, client_w/client_h, 1.0];
        //reshape.enter(context);
        //this.font.enter(context);
        //this.font.exit(context);
        this.label.text = this.start_index.toString(); //String(parseFloat(Math.round(this.start_index * 100) / 100).toFixed(2));
        this.label.enter(context);
        this.label.exit(context);
        //  let gt = new GeoTest()
        //  let ll = new CxVisualizerLines(gt, [1.0, 0.0, 0.0, 1.0]);
        //
        //  ll.enter(context);
        //  ll.exit(context);
        //this.label.text = String(parseFloat(Math.round(this.start_index * 100) / 100).toFixed(2));
        //reshape.exit(context);
        this.transform.exit(context);
        ortho.exit(context);
        this._viewport.exit(context);
    }
    exit(context) {
    }
}

export { CxDisplay, CxNode, CxVisualizerColorArray, CxVisualizerPalos, CxVisualizerTextured, CxVisualizerLines, CxVisualizerAngularAlpha, CxTextureImage, CxTextureFont, CxSelectableBackground, CxNodePayloadViewport, CxNodePayloadPerspective, CxNodePayloadOrtho, CxNodePayloadTransform, CxNodePayloadInteractive, CxNodePayloadName, CxNameManager, CxNodePayloadLabel, CxCylinder, CxScene, CxRenderingContext, CxGrid, CxSplit, CxSplitDirection, CxLogPlot };
//# sourceMappingURL=afterglow.js.map
