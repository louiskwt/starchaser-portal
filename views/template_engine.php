<?php 
class Template{
  protected $path, $data;

  public function __construct($path, $data = array()) {
    $this->path = $path;
    $this->data = $data;
  }

  public function render() {
    if (file_exists($this->path)) {
      // Extracts vars to current view
      extract($this->data);
      // starts output buffering
      ob_start();

      // Include content
      include $this->path;
      $buffer = ob_get_contents();
      @ob_end_clean();

      return $buffer
    } else {
      // throw exception    
    }
  }
}

?>
