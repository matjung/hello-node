/* This is a front end module for the browser */

export let HelloNode; if( typeof HTMLElement !== 'undefined' ) 
{
  import ( './hello-node.js');
} 
  else 
{
  HelloNode={};
}
