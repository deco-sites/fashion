import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function SearchControls({ page }: Props) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;

  if (!filters || filters.length === 0) {
    return null;
  }

  return (
    <Container class="flex flex-col justify-between border-b-1 border-default sm:gap-4 sm:flex-row sm:h-[53px]">
      <div class="flex flex-row items-center p-2 sm:p-0">
        <Breadcrumb breadcrumbList={breadcrumb} />
      </div>
      <div class="flex flex-row sm:gap-6 items-center justify-between">
        <Button
          variant="icon"
          onClick={() => {
            open.value = true;
          }}
        >
          <Icon id="FilterList" width={16} height={16} />
          <Text variant="caption-regular">
            Filtrar
          </Text>
        </Button>
        <Sort />
      </div>

      <Modal
        title="Filtrar"
        mode="sidebar-right"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </Container>
  );
}

export default SearchControls;
