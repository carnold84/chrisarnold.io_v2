export default size => {
  switch (size) {
    case 'sm':
      return '(min-width: 576px)';
    case 'md':
      return '(min-width: 768px)';
    case 'lg':
      return '(min-width: 992px)';
    case 'xl':
    default:
      return '(min-width: 1200px)';
  }
};
