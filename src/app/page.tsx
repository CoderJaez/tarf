import Layout from "@/components/Layout";
import Form from "@/components/form/form";
import Offices from "@/DataAccess/Office";
import { Option } from "@/types";
import Header from "@/components/partials/Header";
export default async function Home() {
  const offices = await Offices();
  const options: Option[] = offices.map((office) => {
    const val = `${office.id}-${office.acronym}`;
    return {
      value: val,
      label: office.name,
    } as Option;
  });

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8">
        <Form
          offices={{
            name: "office",
            label: " Office/Service/Bureau/Section/Division/Unit",
            options: options,
          }}
        />
      </div>
    </div>
  );
}
