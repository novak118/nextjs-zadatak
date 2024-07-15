import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

function ContactPage() {
  const footer = <div>Footer sadrzaj</div>;

  const form = <ContactForm />;

  return <Layout articles={form} footer={footer} />;
}
export default ContactPage;
