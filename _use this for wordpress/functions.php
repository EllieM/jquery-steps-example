<?php
//Load Theme's original style
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

//Load Custom js and css files
function load_custom_files(){

    wp_register_script(
      'custom-script',
      get_stylesheet_directory_uri().'/js/custom.js',
      array('jquery')
    );  
    wp_enqueue_script('custom-script');

    wp_register_script(
      'jquery-steps',
      get_stylesheet_directory_uri().'/js/jquery.steps.min.js',
      array('jquery')
    ); 
    wp_enqueue_script('jquery-steps');

    wp_register_script(
      'jquery-validate',
      get_stylesheet_directory_uri().'/js/jquery.validate.js',
      array('jquery')
    );   
    wp_enqueue_script('jquery-validate');

    wp_register_script(
      'jquery-methods',
      get_stylesheet_directory_uri().'/js/additional-methods.min.js',
      array('jquery')
    );   
    wp_enqueue_script('jquery-methods');

    wp_register_style(
      'jquery-steps-style',
      get_stylesheet_directory_uri().'/css/jquery.steps.css');  
    wp_enqueue_style('jquery-steps-style');

   }
   
   add_action('wp_enqueue_scripts','load_custom_files');

?>
