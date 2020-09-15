/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
/* Author https://github.com/matjung Editor nano 2.9.3 Timestamp 2020-09-15 21:40 UTC+2 */
class HelloNode extends HTMLElement 
{
   constructor() 
   {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const h1 = document.createElement('h1');
    h1.textContent='Hello Node!';
    shadow.appendChild(h1);
   }
}
export default HelloNode;
customElements.define('hello-node', HelloNode);
